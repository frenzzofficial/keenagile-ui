"use client";
import { createPortal } from "react-dom";
import { useEffect, useState, type ReactNode } from "react";
import { useCustomPortal } from "@/components/providers/CustomPortalProvider";

interface CustomPortalProps {
  portalKey: string;
  children: ReactNode;
  onClose?: () => void;
}

export function CustomPortal({ portalKey, children, onClose }: CustomPortalProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const { isOpen, closePortal } = useCustomPortal(portalKey);

  useEffect(() => {
    let el = document.getElementById(`portal-${portalKey}`) as HTMLElement | null;

    if (!el) {
      el = document.createElement("div");
      el.id = `portal-${portalKey}`;
      document.body.appendChild(el);
    }

    // Defer state update to avoid cascading render warning
    requestAnimationFrame(() => {
      setContainer(el);
    });

    return () => {
      if (el && el.childNodes.length === 0) {
        document.body.removeChild(el);
      }
    };
  }, [portalKey]);

  const handleClose = () => {
    closePortal();
    onClose?.();
  };

  if (!container || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative z-10 bg-card rounded-lg shadow-lg max-w-lg w-full mx-4 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    container
  );
}
