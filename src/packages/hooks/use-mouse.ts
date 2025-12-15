import { useState, useCallback, useRef, useEffect } from "react";

type MousePosition = { x: number; y: number };

export function useMousePosition<T extends HTMLElement>(): [
  React.RefObject<T | null>,
  MousePosition,
] {
  const ref = useRef<T>(null);
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const target = ref.current;
    if (!target) return;

    const rect = target.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouse({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return [ref, mouse];
}
