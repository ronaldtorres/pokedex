export const throttle = (callback: CallableFunction, time: number) => {
  let throttleTimer = false;

  return (...args: any[]) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
      callback(args);
      throttleTimer = false;
    }, time);
  };
};
