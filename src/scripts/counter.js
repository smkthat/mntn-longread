/**
 * A class that serves as a counter.
 *
 * @class Counter
 */
export class Counter {
  constructor(element) {
    this.element = element;
    this.value = 0;
    this.render();
  }

  increment() {
    this.value += 1;
    this.render();
  }

  reset() {
    this.value = 0;
    this.render();
  }

  render() {
    this.element.innerHTML = `count is ${this.value}`;
  }
}


export function setupCounter(element) {
  const counter = new Counter(element);
  counter.render();
  element.addEventListener('click', () => counter.increment());
  return counter;
}