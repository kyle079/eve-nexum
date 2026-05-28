import { useEffect, useState } from 'react';

export type LayoutTier = 'compact' | 'standard' | 'spacious';
export type Orientation = 'portrait' | 'landscape';
export type PanelDock = 'bottom' | 'side';
export type SidebarMode = 'drawer' | 'inline';

export interface Layout {
  tier: LayoutTier;
  orientation: Orientation;
  panelDock: PanelDock;
  sidebarMode: SidebarMode;
  touchPrimary: boolean;
  width: number;
  height: number;
}

const COMPACT_MAX = 767;
const STANDARD_MAX = 1199;

function computeLayout(): Layout {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const tier: LayoutTier =
    width <= COMPACT_MAX ? 'compact' :
    width <= STANDARD_MAX ? 'standard' :
    'spacious';
  const orientation: Orientation = height > width ? 'portrait' : 'landscape';
  const panelDock: PanelDock =
    tier === 'spacious' ? 'bottom' :
    orientation === 'portrait' ? 'bottom' : 'side';
  const sidebarMode: SidebarMode = tier === 'spacious' ? 'inline' : 'drawer';
  const touchPrimary = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  return { tier, orientation, panelDock, sidebarMode, touchPrimary, width, height };
}

export function useLayout(): Layout {
  const [layout, setLayout] = useState<Layout>(computeLayout);

  useEffect(() => {
    let rafId = 0;
    const onResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setLayout(computeLayout()));
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return layout;
}
