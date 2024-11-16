/**
 * Represents a menu with open and close functionality.
 *
 * @class
 * @param {HTMLElement} menuElement - The menu element to be controlled.
 * @param {HTMLElement} menuButtonOpenElement - The button element to open the menu.
 * @param {HTMLElement} menuButtonCloseElement - The button element to close the menu.
 * @param {string} activeClassSelector - The CSS class is used to toggle for menu activation.
 *
 * @method init
 * Initializes the menu by adding event listeners to the open and close buttons.
 *
 * @method toggleMenu
 * Toggles the active class on the menu element to open or close the menu.
 */
export default class Menu {

    /**
     * Initializes the menu by adding event listeners to the open and close buttons.
     *
     * @return {void} This function does not return a value.
     */
    init() {
        this.menuButtonOpen.addEventListener('click', this.toggleMenu.bind(this));
        this.menuButtonClose.addEventListener('click', this.toggleMenu.bind(this));
    }

    constructor(menuElement, menuButtonOpenElement, menuButtonCloseElement, activeClassSelector) {
        this.activeClass = activeClassSelector;
        this.menu = menuElement;
        this.menuButtonOpen = menuButtonOpenElement;
        this.menuButtonClose = menuButtonCloseElement;
    }

    /**
     * Toggles the active class on the menu element to open or close the menu.
     *
     * @return {void} This function does not return a value.
     */
    toggleMenu() {
        this.menu.classList.toggle(this.activeClass);
    }
}