# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EVE Nexum — free, open-source, self-hosted wormhole mapping tool for EVE Online. Tracks systems, signatures, structures, kills; provides real-time collaboration for J-space corps. Logs in via EVE SSO, runs anywhere Docker does.

## Architecture

Three-tier monorepo: React SPA frontend (`web/`), Node.js + Express API (`server/`), PostgreSQL 16.

- **Frontend**: React 19, TypeScript, Vite, Zustand (state), @xyflow/react (canvas/map), @dnd-kit (drag-drop), Chart.js
- **Backend**: Node.js 20, TypeScript, Express, `pg` (raw SQL, no ORM), express-session + connect-pg-simple
- **Real-time**: Server-Sent Events (SSE) per map via `server/src/services/mapEvents.js` — broadcasts system/connection/sig changes, echo-suppresses own edits, auto-resyncs on reconnect
- **Auth**: EVE Online SSO (OAuth2) → encrypted tokens at rest (AES-256 via `server/src/utils/tokenCrypto.ts`), session cookies (httpOnly, 7-day TTL)
- **Database migrations**: Auto-run on every server boot from `server/src/migrate.ts` — no manual migration step needed

## Development Commands

### Local development (two terminals)

```bash
# Terminal 1: API server (hot-reload)
cd server && yarn dev          # tsx watch → localhost:3001

# Terminal 2: Frontend (Vite dev server, proxies /api and /auth to :3001)
cd web && yarn dev             # localhost:5174
```

### First-time setup

```bash
# Install deps (run in both server/ and web/)
cd server && yarn install
cd web && yarn install

# Import EVE Static Data Export into Postgres (one-time, ~3-5 min)
cd server && yarn setup-db

# Optional: populate solar system coordinates for region seeding
cd server && yarn backfill-coords
```

### Build & lint

```bash
cd server && yarn build        # tsc → dist/
cd web && yarn build           # tsc -b && vite build → dist/
cd web && yarn lint            # ESLint
```

### Docker

```bash
docker compose build
docker compose up -d
docker compose logs -f server
```

### Utility scripts (server/)

```bash
yarn seed-demo                 # Create demo map
yarn extract-wormholes         # Refresh wormhole metadata from SDE
```

## Key Directories

```
server/src/
├── index.ts              # Express entry point
├── config.ts             # Env validation
├── db.ts                 # PostgreSQL pool
├── migrate.ts            # Auto-running schema migrations
├── middleware/            # Auth, rate-limiting, origin guard, CSRF
├── routes/               # REST endpoints (one file per domain)
├── services/             # Business logic (mapEvents, presence, discord, audit, standings)
└── utils/                # Helpers (logger, tokenCrypto)

web/src/
├── App.tsx               # Main entry
├── components/map/       # Canvas rendering (MapCanvas.tsx)
├── components/ui/        # UI panels and modals
├── store/                # Zustand stores (mapStore, presenceStore, pendingQueue)
├── context/              # AuthContext (user auth & permissions)
├── hooks/                # useMapEventStream (SSE), useLocationTracking, useHashRoute
├── api/                  # Fetch wrapper (client.ts) with share-token support
└── types/                # TypeScript type definitions
```

## Code Patterns

- **No ORM** — raw SQL via `pg` throughout. Queries live directly in route handlers and services.
- **UUID primary keys** for maps, systems, connections.
- **Hash-based routing** on frontend (`#/map/:id`, `#/admin/users`).
- **Zustand** for all map state (systems, connections, selection, undo history).
- **Service layer** separates concerns: mapEvents (SSE broadcast), presence (pilot tracking), audit (admin logging), discord (webhook push), standings (EVE contacts).
- **Rate limiters**: `authLimiter`, `esiLimiter`, `publicLimiter`, `appLimiter` — defined in middleware.
- **Role-based access**: `readonly`, `edit`, `full`, `admin` — roles only restrict corp-map actions; personal maps are always fully owned.

## External APIs

- **EVE SSO**: OAuth2 login
- **ESI** (EVE Swagger Interface): Location, ship, structures, kills, standings, corp membership, fleet
- **zKillboard**: Recent kill feed (public)
- **EveScout**: Thera/Turnur connections, storm tracking (scraped feed, 30-min refresh)

## Environment

Config via `.env` (see `.env.example`). Key vars: `PG_*` (database), `EVE_CLIENT_ID/SECRET/CALLBACK_URL` (SSO), `FRONTEND_URL` (CORS), `SESSION_SECRET`, `TOKEN_ENCRYPTION_KEY`, `CORP_ID` (corp mode), `DISCORD_WEBHOOK_URL`.
