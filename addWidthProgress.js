let time = 0;

addProgressWidthLoopEvent = setInterval(() => {
  time += 50;
  // set css variable called --prevWidth and update value here
  root.style.setProperty('--prevWidth', String(time / 95) + "%");
}, 50);