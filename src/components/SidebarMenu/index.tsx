import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  getOverlayStyle,
  getPanelStyle,
  headerStyle,
  titleStyle,
  closeBtnStyle,
  listStyle,
  itemRowStyle,
  labelStyle,
  linkStyle,
  expandBtnStyle,
  chevronStyle,
  sectionStyle,
  submenuWrapStyle,
} from "./styles";
import { DEFAULTS, KEYS } from "./constants";

export type MenuItem = {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  children?: MenuItem[];
};

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  title?: string;
  width?: number | string;
  initialExpandedIds?: string[];
  closeOnNavigate?: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
  title = DEFAULTS.TITLE,
  width = DEFAULTS.WIDTH,
  initialExpandedIds = [],
  closeOnNavigate = DEFAULTS.CLOSE_ON_NAVIGATE,
}) => {
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(initialExpandedIds)
  );
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === KEYS.ESCAPE) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const hasChildren = useMemo(() => {
    const set = new Set<string>();
    const walk = (nodes: MenuItem[]) => {
      nodes.forEach((n) => {
        if (n.children && n.children.length > 0) set.add(n.id);
        if (n.children) walk(n.children);
      });
    };
    walk(items);
    return set;
  }, [items]);

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleLeafClick = (item: MenuItem) => {
    item.onClick?.();
    if (item.href) {
      // allow default navigation in stories/app
    }
    if (closeOnNavigate) onClose();
  };

  return (
    <>
      <div style={getOverlayStyle(isOpen)} onClick={onClose} />

      <div
        ref={panelRef}
        style={getPanelStyle(isOpen, width)}
        onClick={(e) => e.stopPropagation()}
        onTransitionEnd={(e) => {
          if (e.target !== e.currentTarget) return;
        }}
      >
        <header style={headerStyle}>
          <h2 style={titleStyle}>{title}</h2>
          <button type="button" onClick={onClose} style={closeBtnStyle}>
            ×
          </button>
        </header>

        <nav>
          <ul style={listStyle}>
            {items.map((item) => (
              <MenuNode
                key={item.id}
                item={item}
                level={0}
                expanded={expanded}
                onToggle={toggle}
                onLeafClick={handleLeafClick}
                hasChildrenSet={hasChildren}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SidebarMenu;

// Helpers

interface NodeProps {
  item: MenuItem;
  level: number;
  expanded: Set<string>;
  onToggle: (id: string) => void;
  onLeafClick: (item: MenuItem) => void;
  hasChildrenSet: Set<string>;
}

const MenuNode: React.FC<NodeProps> = ({
  item,
  level,
  expanded,
  onToggle,
  onLeafClick,
  hasChildrenSet,
}) => {
  const isBranch = hasChildrenSet.has(item.id);
  const isOpen = isBranch && expanded.has(item.id);

  return (
    <li>
      <div style={sectionStyle(level)}>
        {isBranch ? (
          <button
            type="button"
            onClick={() => onToggle(item.id)}
            style={expandBtnStyle}
          >
            <span style={labelStyle}>{item.label}</span>
            <span style={chevronStyle(isOpen)}>▸</span>
          </button>
        ) : item.href ? (
          <a
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              onLeafClick(item);
            }}
            style={{ ...itemRowStyle, ...linkStyle }}
          >
            <span style={labelStyle}>{item.label}</span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() => onLeafClick(item)}
            style={itemRowStyle}
          >
            <span style={labelStyle}>{item.label}</span>
          </button>
        )}
      </div>

      {isBranch && (
        <div style={submenuWrapStyle(isOpen)}>
          <ul style={listStyle}>
            {item.children!.map((child) => (
              <MenuNode
                key={child.id}
                item={child}
                level={level + 1}
                expanded={expanded}
                onToggle={onToggle}
                onLeafClick={onLeafClick}
                hasChildrenSet={hasChildrenSet}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
