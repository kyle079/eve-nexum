import { useRef, useEffect, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onDismiss?: () => void;
  snapPoints?: number[];
  initialSnap?: number;
}

const DEFAULT_SNAPS = [0.15, 0.45, 0.85];

export function BottomSheet({ children, onDismiss, snapPoints = DEFAULT_SNAPS, initialSnap = 1 }: Props) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ startY: 0, startH: 0, dragging: false });
  const [snapIndex, setSnapIndex] = useState(initialSnap);
  const heightFraction = snapPoints[snapIndex];

  function nearest(fraction: number): number {
    let best = 0;
    let bestDist = Math.abs(snapPoints[0] - fraction);
    for (let i = 1; i < snapPoints.length; i++) {
      const dist = Math.abs(snapPoints[i] - fraction);
      if (dist < bestDist) { best = i; bestDist = dist; }
    }
    return best;
  }

  function onPointerDown(e: React.PointerEvent) {
    if ((e.target as HTMLElement).closest('.bottom-sheet__content')) return;
    dragRef.current = { startY: e.clientY, startH: heightFraction * window.innerHeight, dragging: true };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!dragRef.current.dragging) return;
    const dy = dragRef.current.startY - e.clientY;
    const newH = Math.max(0, dragRef.current.startH + dy);
    const fraction = newH / window.innerHeight;
    if (sheetRef.current) {
      sheetRef.current.style.height = `${fraction * 100}vh`;
      sheetRef.current.style.transition = 'none';
    }
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!dragRef.current.dragging) return;
    dragRef.current.dragging = false;
    const dy = dragRef.current.startY - e.clientY;
    const newH = Math.max(0, dragRef.current.startH + dy);
    const fraction = newH / window.innerHeight;

    if (fraction < snapPoints[0] * 0.5) {
      onDismiss?.();
      return;
    }

    const snap = nearest(fraction);
    setSnapIndex(snap);
    if (sheetRef.current) {
      sheetRef.current.style.transition = 'height 250ms cubic-bezier(0.16, 1, 0.3, 1)';
      sheetRef.current.style.height = `${snapPoints[snap] * 100}vh`;
    }
  }

  useEffect(() => {
    if (sheetRef.current) {
      sheetRef.current.style.height = `${heightFraction * 100}vh`;
    }
  }, [heightFraction]);

  return (
    <div
      ref={sheetRef}
      className="bottom-sheet"
      style={{ height: `${heightFraction * 100}vh`, transition: 'height 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div className="bottom-sheet__handle" />
      <div className="bottom-sheet__content">
        {children}
      </div>
    </div>
  );
}
