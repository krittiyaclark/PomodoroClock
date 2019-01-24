function timer(sec) {
  const now = Date.now();
  const then = now + sec * 1000;
  console.log({now, then});

  // Every second displays seconds left
  setInterval(() => {
    const secLeft = Math.round((then - Date.now()) / 1000);
    console.log(secLeft);
  }, 1000)
}
