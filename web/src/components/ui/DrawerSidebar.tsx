import { type ReactNode } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  side?: 'left' | 'right';
  children: ReactNode;
}

export function DrawerSidebar({ open, onClose, side = 'left', children }: Props) {
  return (
    <>
      {open && <div className="drawer-backdrop" onClick={onClose} />}
      <aside className={`drawer drawer--${side}${open ? ' drawer--open' : ''}`}>
        {children}
      </aside>
    </>
  );
}
