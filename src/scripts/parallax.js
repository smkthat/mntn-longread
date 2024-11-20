/**
 * Represents a Parallax effect component that applies a visual shift to elements
 * based on cursor movement. The effect is activated when the container is in the
 * viewport and the window width is above a specified breakpoint.
 *
 * @class
 * @param {string} containerSelector - The CSS selector for the container element.
 * @param {number} breakpoint - The minimum window width required to enable the effect.
 * @param {Array} parallaxData - An array of objects defining layer indices and shift values.
 */
export default class Parallax {
  constructor(containerSelector, breakpoint, parallaxData) {
    this.parallaxData = parallaxData;
    this.container = document.querySelector(containerSelector);
    this.layers = this.container.querySelectorAll('.parallax-image__layer');
    this.breakpoint = breakpoint;
    this.isInViewport = false;
    this.init();
  }

  /**
   * Initializes the component by setting up the IntersectionObserver and
   * adding a mousemove event listener conditionally.
   *
   * @return {void}
   */
  init() {
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0 // Trigger when any part of the container is visible
    };

    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), observerOptions);
    this.observer.observe(this.container);
  }

  /**
   * Handles the intersection event to determine if the container is in the viewport.
   * Adds or removes the mousemove event listener based on visibility.
   *
   * @param {Array} entries - The intersection observer entries.
   * @return {void}
   */
  handleIntersection(entries) {
    entries.forEach(entry => {
      this.isInViewport = entry.isIntersecting;
      if (this.isInViewport) {
        window.addEventListener('mousemove', this.handleMouseMove.bind(this));
      } else {
        window.removeEventListener('mousemove', this.handleMouseMove.bind(this));
      }
    });
  }

  /**
   * Handles the mousemove event to apply a parallax effect on layers.
   * Calculates the shift for each layer based on cursor position and applies
   * a transform style to create the effect. The effect is disabled if the
   * window width is below the specified breakpoint or the container is not in the viewport.
   *
   * @param {MouseEvent} event - The mousemove event object containing cursor coordinates.
   * @return {void}
   */
  handleMouseMove(event) {
    if (!this.isInViewport || (this.breakpoint && window.innerWidth < this.breakpoint)) {
      return;
    }

    const {clientX, clientY} = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    this.parallaxData.forEach(data => {
      const layer = this.layers[data.layer];
      if (layer) {
        const shiftX = (clientX - centerX) * data.shift / 1000;
        const shiftY = (clientY - centerY) * data.shift / 1000;
        const scale = 1.1;
        layer.style.transform = `
          translate(${-shiftX}px, ${-shiftY}px) scale(${scale})
        `;
      }
    });
  }
}
