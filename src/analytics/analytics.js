function getAnalytics() {
  let counter = 0;
  let isDestoyed = false;

  const listener = () => counter++;

  document.addEventListener("click", listener);

  return {
    getClicks() {
      return counter;
    },
  };
}

window.analytics = getAnalytics();
