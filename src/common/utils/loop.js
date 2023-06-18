function loop(fn, time, count) {
  let i = 0;
  function loopFn() {
    i++;
    fn(i);
    if (i < count) {
      setTimeout(loopFn, time);
    }
  }
  setTimeout(loopFn, time);
}

loop(
  (i) => {
    console.log(i);
  },
  1000,
  5,
);
