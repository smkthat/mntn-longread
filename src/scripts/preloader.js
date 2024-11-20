/**
 * A class to manage the visibility of a preloader element on a webpage.
 *
 * The Preloader class provides methods to show and hide a preloader
 * element by toggling a CSS class. It also initializes an event listener
 * to automatically hide the preloader shortly after the window loads.
 */
export default class Preloader {
  constructor() {
    this.preloader = document.querySelector('.preloader');
  }

  /**
   * Hides the preloader element by adding the 'preloader--hidden' CSS class.
   *
   * @return {void} This function does not return anything.
   */
  hide() {
    this.preloader.classList.add('preloader--hidden');
  }

  /**
   * Show the preloader by removing the 'preloader--hidden' class from the preloader element.
   *
   * @return {void} This function does not return anything.
   */
  show() {
    this.preloader.classList.remove('preloader--hidden');
  }

  /**
   * Initializes the function to listen for the 'load' event on the window object.
   * When the event is triggered, it sets a timeout of 3 milliseconds to call the 'hide' method of the current instance.
   *
   * @return {void} This function does not return anything.
   */
  init() {
    window.addEventListener('load', () => {
      setTimeout(() => this.hide(), 3);
    });
  }
}
