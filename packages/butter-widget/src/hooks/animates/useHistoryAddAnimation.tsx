"use client";
import { gsap } from "gsap";
import MotionPath from "gsap/dist/MotionPathPlugin";
gsap.registerPlugin(MotionPath);

type Props = {
  fromElement: HTMLDivElement | null;
  toElement: HTMLDivElement | null;
  onComplete: () => void;
};
const useHistoryAddAnimation = () => {
  const executeAnimation = ({ fromElement, toElement, onComplete }: Props) => {
    if (!fromElement || !toElement) {
      return;
    }
    const bigCardRect = fromElement.getBoundingClientRect();
    const smallCardRect = toElement.getBoundingClientRect();
    const scaleX = smallCardRect.width / bigCardRect.width;
    const scaleY = smallCardRect.height / bigCardRect.height;
    const rect = MotionPath.getRelativePosition(fromElement, toElement);
    const path = [
      { x: 0, y: 0 },
      { x: rect.x / 2 - 100, y: rect.y / 2 - 400 },
      { x: rect.x - 300, y: rect.y + 240 },
      { x: rect.x, y: rect.y },
      // {x: 0, y: 0},
      // // {x: transX / 2, y: transY / 2},
      // {x: transX - 200, y: transY}
    ];
    const tl = gsap.timeline({});
    tl.to(fromElement, {
      scaleX,
      scaleY,
      transformOrigin: "top left",
    });
    tl.to(
      fromElement,
      {
        motionPath: {
          path,
          relative: false,
          type: "cubic",
        },
        duration: 1,
      },
      "<",
    );
    tl.to(toElement, {
      opacity: 1,
    });
    tl.to(
      fromElement,
      {
        opacity: 0,
      },
      "<",
    );
    tl.set(fromElement, {
      translateY: 0,
      translateX: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 0,
      onComplete,
    });
  };

  return {
    executeAnimation,
  };
};

export default useHistoryAddAnimation;
