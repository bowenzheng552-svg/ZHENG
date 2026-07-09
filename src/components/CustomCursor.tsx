import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const hoveringRef = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".interactive-cursor");

      if (isInteractive) {
        hoveringRef.current = true;
        ring.classList.add("hovering");
        dot.classList.add("hovering");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const related = e.relatedTarget as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".interactive-cursor");

      if (isInteractive && (!related || !related.closest(".interactive-cursor"))) {
        hoveringRef.current = false;
        ring.classList.remove("hovering");
        dot.classList.remove("hovering");
      }
    };

    const animate = () => {
      // Dot follows tightly
      dotX += (targetRef.current.x - dotX) * 0.22;
      dotY += (targetRef.current.y - dotY) * 0.22;
      dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;

      // Ring trails with more damping
      ringX += (targetRef.current.x - ringX) * 0.08;
      ringY += (targetRef.current.y - ringY) * 0.08;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
