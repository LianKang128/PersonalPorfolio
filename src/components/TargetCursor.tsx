"use client";

import { useEffect, useRef } from "react";
import styles from "./TargetCursor.module.css";

type MagnetMotion = {
  element: HTMLElement;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  targetX: number;
  targetY: number;
};

type TargetCursorProps = {
  targetSelector?: string;
  magnetSelector?: string;
};

const CORNER_SIZE = 12;
const MAX_MAGNET_PULL = 12;
const IDLE_CORNERS = [
  { x: -18, y: -18 },
  { x: 6, y: -18 },
  { x: 6, y: 6 },
  { x: -18, y: 6 },
];

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(Math.max(value, minimum), maximum);

export default function TargetCursor({
  targetSelector = ".cursor-target",
  magnetSelector = ".magnet-target",
}: TargetCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cornerRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const corners = cornerRefs.current.filter(
      (corner): corner is HTMLSpanElement => corner !== null,
    );

    if (!cursor || corners.length !== IDLE_CORNERS.length) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disableInteraction = () => {};

    const enableInteraction = () => {
      let animationFrame = 0;
      let activeTarget: HTMLElement | null = null;
      let activeMagnet: HTMLElement | null = null;
      let pointerX = -100;
      let pointerY = -100;
      let cursorX = -100;
      let cursorY = -100;
      let rotation = 0;
      let lastFrame = performance.now();
      const cornerPositions = IDLE_CORNERS.map((position) => ({ ...position }));
      const magnets = new Map<HTMLElement, MagnetMotion>();

      document.documentElement.classList.add("target-cursor-enabled");

      const findClosest = (node: EventTarget | null, selector: string) => {
        if (!(node instanceof Element)) return null;

        const match = node.closest(selector);
        return match instanceof HTMLElement && !match.hasAttribute("disabled")
          ? match
          : null;
      };

      const setActiveTarget = (target: HTMLElement | null) => {
        if (activeTarget === target) return;

        activeTarget?.removeAttribute("data-cursor-active");
        activeTarget = target;
        activeTarget?.setAttribute("data-cursor-active", "true");
        cursor.classList.toggle(styles.locked, Boolean(activeTarget));
      };

      const getMagnetMotion = (element: HTMLElement) => {
        const existing = magnets.get(element);
        if (existing) return existing;

        const motion: MagnetMotion = {
          element,
          x: 0,
          y: 0,
          velocityX: 0,
          velocityY: 0,
          targetX: 0,
          targetY: 0,
        };

        magnets.set(element, motion);
        element.style.willChange = "translate";
        return motion;
      };

      const setActiveMagnet = (element: HTMLElement | null) => {
        if (activeMagnet === element) return;

        if (activeMagnet) {
          const previous = getMagnetMotion(activeMagnet);
          previous.targetX = 0;
          previous.targetY = 0;
          activeMagnet.removeAttribute("data-magnet-active");
        }

        activeMagnet = element;

        if (activeMagnet) {
          getMagnetMotion(activeMagnet);
          activeMagnet.setAttribute("data-magnet-active", "true");
        }
      };

      const updateMagnetTarget = () => {
        if (!activeMagnet) return;

        const motion = getMagnetMotion(activeMagnet);
        const rect = activeMagnet.getBoundingClientRect();
        const baseCenterX = rect.left + rect.width / 2 - motion.x;
        const baseCenterY = rect.top + rect.height / 2 - motion.y;
        motion.targetX = clamp(
          (pointerX - baseCenterX) * 0.2,
          -MAX_MAGNET_PULL,
          MAX_MAGNET_PULL,
        );
        motion.targetY = clamp(
          (pointerY - baseCenterY) * 0.2,
          -MAX_MAGNET_PULL,
          MAX_MAGNET_PULL,
        );
      };

      const updateHoveredElements = (node: EventTarget | null) => {
        setActiveTarget(findClosest(node, targetSelector));
        setActiveMagnet(findClosest(node, magnetSelector));
        updateMagnetTarget();
      };

      const updateFromPoint = () => {
        const element = document.elementFromPoint(pointerX, pointerY);
        updateHoveredElements(element);
      };

      const handlePointerMove = (event: PointerEvent) => {
        if (event.pointerType && event.pointerType !== "mouse") return;

        pointerX = event.clientX;
        pointerY = event.clientY;
        cursor.classList.add(styles.visible);
        updateHoveredElements(event.target);
      };

      const handlePointerDown = (event: PointerEvent) => {
        if (event.pointerType && event.pointerType !== "mouse") return;
        cursor.classList.add(styles.pressed);
      };

      const handlePointerUp = () => {
        cursor.classList.remove(styles.pressed);
      };

      const handleWindowExit = (event: MouseEvent) => {
        if (event.relatedTarget) return;

        cursor.classList.remove(styles.visible, styles.pressed);
        setActiveTarget(null);
        setActiveMagnet(null);
      };

      const handleWindowBlur = () => {
        cursor.classList.remove(styles.visible, styles.pressed);
        setActiveTarget(null);
        setActiveMagnet(null);
      };

      const render = (time: number) => {
        const elapsed = Math.min(time - lastFrame, 32);
        const follow = 1 - Math.exp(-elapsed * 0.024);
        const cornerFollow = 1 - Math.exp(-elapsed * 0.018);
        const springStep = elapsed / 16.667;
        lastFrame = time;

        cursorX += (pointerX - cursorX) * follow;
        cursorY += (pointerY - cursorY) * follow;

        if (activeTarget?.isConnected) {
          const rect = activeTarget.getBoundingClientRect();
          const inset = 5;
          rotation = 0;
          const positions = [
            { x: rect.left - inset - cursorX, y: rect.top - inset - cursorY },
            {
              x: rect.right + inset - CORNER_SIZE - cursorX,
              y: rect.top - inset - cursorY,
            },
            {
              x: rect.right + inset - CORNER_SIZE - cursorX,
              y: rect.bottom + inset - CORNER_SIZE - cursorY,
            },
            {
              x: rect.left - inset - cursorX,
              y: rect.bottom + inset - CORNER_SIZE - cursorY,
            },
          ];

          cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
          corners.forEach((corner, index) => {
            const position = cornerPositions[index];
            const target = positions[index];
            position.x += (target.x - position.x) * cornerFollow;
            position.y += (target.y - position.y) * cornerFollow;
            corner.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
          });
        } else {
          if (activeTarget && !activeTarget.isConnected) setActiveTarget(null);

          corners.forEach((corner, index) => {
            const position = cornerPositions[index];
            const target = IDLE_CORNERS[index];
            position.x += (target.x - position.x) * cornerFollow;
            position.y += (target.y - position.y) * cornerFollow;
            corner.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
          });

          const cornersSettled = cornerPositions.every((position, index) => {
            const target = IDLE_CORNERS[index];
            return Math.abs(position.x - target.x) < 0.5 && Math.abs(position.y - target.y) < 0.5;
          });

          if (cornersSettled) rotation = (rotation + elapsed * 0.045) % 360;
          cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) rotate(${rotation}deg)`;
        }

        magnets.forEach((motion, element) => {
          if (!element.isConnected) {
            magnets.delete(element);
            return;
          }

          const spring = activeMagnet === element ? 0.2 : 0.12;
          const damping = activeMagnet === element ? 0.72 : 0.78;
          motion.velocityX =
            (motion.velocityX + (motion.targetX - motion.x) * spring * springStep) * damping;
          motion.velocityY =
            (motion.velocityY + (motion.targetY - motion.y) * spring * springStep) * damping;
          motion.x = clamp(
            motion.x + motion.velocityX * springStep,
            -MAX_MAGNET_PULL,
            MAX_MAGNET_PULL,
          );
          motion.y = clamp(
            motion.y + motion.velocityY * springStep,
            -MAX_MAGNET_PULL,
            MAX_MAGNET_PULL,
          );

          const settled =
            activeMagnet !== element &&
            Math.abs(motion.x) < 0.02 &&
            Math.abs(motion.y) < 0.02 &&
            Math.abs(motion.velocityX) < 0.02 &&
            Math.abs(motion.velocityY) < 0.02;

          if (settled) {
            element.style.removeProperty("translate");
            element.style.removeProperty("will-change");
            magnets.delete(element);
          } else {
            element.style.translate = `${motion.x.toFixed(2)}px ${motion.y.toFixed(2)}px`;
          }
        });

        animationFrame = window.requestAnimationFrame(render);
      };

      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("pointerdown", handlePointerDown, { passive: true });
      window.addEventListener("pointerup", handlePointerUp, { passive: true });
      window.addEventListener("mouseout", handleWindowExit);
      window.addEventListener("blur", handleWindowBlur);
      window.addEventListener("scroll", updateFromPoint, { passive: true });
      window.addEventListener("resize", updateFromPoint, { passive: true });
      animationFrame = window.requestAnimationFrame(render);

      return () => {
        window.cancelAnimationFrame(animationFrame);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("pointerup", handlePointerUp);
        window.removeEventListener("mouseout", handleWindowExit);
        window.removeEventListener("blur", handleWindowBlur);
        window.removeEventListener("scroll", updateFromPoint);
        window.removeEventListener("resize", updateFromPoint);
        activeTarget?.removeAttribute("data-cursor-active");
        activeMagnet?.removeAttribute("data-magnet-active");
        magnets.forEach(({ element }) => {
          element.removeAttribute("data-magnet-active");
          element.style.removeProperty("translate");
          element.style.removeProperty("will-change");
        });
        magnets.clear();
        cursor.classList.remove(styles.visible, styles.locked, styles.pressed);
        cursor.removeAttribute("style");
        corners.forEach((corner) => corner.removeAttribute("style"));
        document.documentElement.classList.remove("target-cursor-enabled");
      };
    };

    const syncCapability = () => {
      disableInteraction();
      disableInteraction = () => {};

      if (finePointer.matches && !reducedMotion.matches) {
        disableInteraction = enableInteraction();
      }
    };

    finePointer.addEventListener("change", syncCapability);
    reducedMotion.addEventListener("change", syncCapability);
    syncCapability();

    return () => {
      finePointer.removeEventListener("change", syncCapability);
      reducedMotion.removeEventListener("change", syncCapability);
      disableInteraction();
    };
  }, [magnetSelector, targetSelector]);

  return (
    <div ref={cursorRef} className={styles.cursor} data-target-cursor aria-hidden="true">
      <span className={styles.dot} />
      {[styles.topLeft, styles.topRight, styles.bottomRight, styles.bottomLeft].map(
        (cornerClass, index) => (
          <span
            key={cornerClass}
            ref={(element) => {
              cornerRefs.current[index] = element;
            }}
            className={`${styles.corner} ${cornerClass}`}
          />
        ),
      )}
    </div>
  );
}
