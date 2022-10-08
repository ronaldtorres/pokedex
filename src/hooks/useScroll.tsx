import { Dispatch, useEffect, useRef, useState } from "react";
import { throttle as Throttle } from "../utils";

type ScrollType = {
  hasScrolled: boolean;
  percentage: number;
};

export function useScroll(
  throttle = 100
): [scroll: ScrollType, setScroll: Dispatch<React.SetStateAction<ScrollType>>] {
  const scrollThrottle = useRef(throttle);
  const [scroll, setScroll] = useState<ScrollType>({
    hasScrolled: false,
    percentage: 0,
  });

  useEffect(() => {
    scrollThrottle.current = throttle;
  }, [throttle]);

  useEffect(() => {
    const updateScroll = () => {
      setScroll({
        hasScrolled: true,
        percentage: getScrollPercentage(),
      });
    };
    const scrollListener = Throttle(updateScroll, scrollThrottle.current);

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return [scroll, setScroll];
}

const getScrollPosition = () =>
  window.scrollY || document.documentElement.scrollTop;

const getScrollPercentage = () => {
  const scrollPosition = getScrollPosition();
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollTop = scrollPosition / scrollHeight || 0;

  return scrollTop * 100;
};
