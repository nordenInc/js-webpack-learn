function getAnalytics(): object {
  let counter = 0;
  let isDestoyed: boolean = false;

  const listener = (): number => counter++;

  document.addEventListener("click", listener);

  return {
    getClicks() {
      return counter;
    },
  };
}

window["analytics"] = getAnalytics();
