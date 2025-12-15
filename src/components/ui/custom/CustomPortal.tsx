"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface CustomPortalProps {
  children: React.ReactNode;
  triggerKey: string;
  className?: string;
}

export default function CustomPortal({ children, triggerKey, className }: CustomPortalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set the portal target only after the ref is mounted
    if (containerRef.current) {
      setPortalTarget(containerRef.current);
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === triggerKey) {
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [triggerKey]);

  return (
    <>
      <div ref={containerRef} className={className} />
      {isOpen && portalTarget ? createPortal(children, portalTarget) : null}
    </>
  );
}
