import IDataStorage from "./storage/IDataStorage.js";
import LocalStorageService from "./storage/LocalStorageService.js";

/**
 * A class that manages the theme of the application.
 *
 * @class ThemeManager
 * @param {IDataStorage} storageService - The storage service implemented
 * from the IDataStorage interface and used to save and load theme data.
 * @property {string} theme - The current theme preference ('light' or 'dark').
 * @property {IDataStorage} storageService - The storage service used
 * to save and load theme data.
 * @method toggleTheme - Toggles the theme between light and dark.
 * @method applyTheme - Applies the current theme to the document body.
 * @method getSystemTheme - Gets the system theme preference.
 */
class ThemeManager {
  /**
   * Creates a new instance of the ThemeManager class.
   *
   * @constructor
   * @param {IDataStorage} storageService - The storage service used
   * to save and load theme data.
   *
   * @throws {Error} IDataStorage must be implemented.
   */
  constructor(storageService) {
    if (!(storageService instanceof IDataStorage)) {
      throw new Error('IDataStorage must be implemented.');
    }
    this.storageService = storageService;
    this.theme = this.storageService.load('theme') || this.getSystemTheme();
    this.applyTheme();
  }

  /**
   * Toggles the theme between light and dark.
   *
   * @method toggleTheme
   * @return {void}
   */
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.storageService.save('theme', this.theme);
    this.applyTheme();
  }

  /**
   * Applies the current theme to the document body.
   *
   * @method applyTheme
   * @return {void}
   */
  applyTheme() {
    document.documentElement.setAttribute(
      'data-theme',
      this.theme
    );
  }

  /**
   * Gets the system theme preference.
   *
   * @method getSystemTheme
   * @return {string} - The system theme preference ('light' or 'dark').
   */
  getSystemTheme() {
    if (window.matchMedia && window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches) {
      return 'dark';
    }
    return 'light';
  }
}

/**
 * Sets up the theme switcher event listener for the given element.
 *
 * @param {HTMLElement} element - The element to set up the theme for.
 * @return {ThemeManager} The theme manager instance.
 */
export function setupTheme(element) {
  const themeManager = new ThemeManager(new LocalStorageService());
  element.querySelector('input[type="checkbox"]').addEventListener(
      "change", () => themeManager.toggleTheme()
  );
  return themeManager;
}
