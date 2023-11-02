import React, { useRef, useMemo, useLayoutEffect } from "react";

function debounce<T extends any[]>(fn: (...args: T) => void, delay: number) {
  let timer: NodeJS.Timeout;

  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const useDebounce = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  const callbackRef = useRef<(...args: T) => void>(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useMemo(
    () => debounce((...args: T) => callbackRef.current(...args), delay),
    [delay]
  );
};

export default useDebounce;
