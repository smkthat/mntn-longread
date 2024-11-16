/**
 * The Scroll class manages scroll-related interactions and behaviors on a webpage.
 * It initializes event listeners for scroll and resize events, handles smooth scrolling
 * to the top of the page, and updates the active state of navigation items based on the
 * current scroll position. It also manages the visibility and styling of the header and
 * menu elements based on the scroll position and proximity to the footer.
 *
 * @param {HTMLElement} menu - The menu element to be managed by the Scroll class.
 * @param {string} quickNavClassSelector - The CSS class selector for quick navigation items.
 * @param {string} quickNavActiveClass - The CSS class used to indicate the active state of navigation items.
 *
 * @throws {Error} If the menu parameter is falsy.
 */
export default class Scroll {

    /**
     * Initializes event listeners for scroll and resize events, as well as click events on scrollLinks.
     * Binds the 'process' method to the current instance of the class.
     *
     * @return {void} This function does not return a value.
     */
    init() {
        window.addEventListener('scroll', this.process.bind(this));
        window.addEventListener('resize', this.process.bind(this));
    }

    constructor(menu, quickNavClassSelector, quickNavActiveClass) {
        if (!menu) {
            throw new Error('Menu must be provided');
        }

        this.menu = menu;
        this.footer = document.querySelector('.footer');
        this.header = document.querySelector('.header');
        this.quickNavClassSelector = quickNavClassSelector;
        this.quickNavActiveClass = quickNavActiveClass;
        this.quickNavItems = document.querySelector(
            this.quickNavClassSelector
        ).querySelectorAll('.nav-list__item');
    }

    /**
     * Returns the height of the header element.
     *
     * @return {number} The height of the header element.
     */
    getHeaderHeight() {
        return this.header.getBoundingClientRect().height || 0;
    }

    /**
     * Processes the current scroll position to update the active state of navigation items,
     * manage the visibility and styling of the header, and handle menu activation based on
     * the proximity to the footer. It ensures the correct navigation item is highlighted
     * based on the scroll position and adjusts the header's appearance accordingly.
     *
     * @return {void} This function does not return a value.
     */
    process() {
        const footerTop = this.footer.getBoundingClientRect().top;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        let activeSet = false;

        this.quickNavItems.forEach(item => {
            const dataId = item.getAttribute('data-id');
            if (dataId) {
                const targetElement = document.getElementById(dataId);
                if (targetElement) {
                    const rect = targetElement.getBoundingClientRect();
                    if (rect.top - 10 <= 0 && rect.bottom > 0) {
                        this.quickNavItems.forEach(navLink => navLink.classList.remove(this.quickNavActiveClass));
                        item.classList.add(this.quickNavActiveClass);
                        activeSet = true;
                    }
                }
            }
        });

        if (!activeSet && this.quickNavItems[1].getBoundingClientRect().top > scrollTop) {
            this.quickNavItems.forEach(nav => nav.classList.remove(this.quickNavActiveClass));
            this.quickNavItems[0].classList.add(this.quickNavActiveClass);
        }

        if (footerTop <= this.getHeaderHeight()) {
            this.header.classList.add('header--hidden');
            this.menu.classList.remove(this.menu.activeClass);
        } else {
            this.header.classList.remove('header--hidden');
        }

        if (scrollTop > 0) {
            this.header.classList.add('header--bg');
        } else {
            this.header.classList.remove('header--bg');
        }
    }
}