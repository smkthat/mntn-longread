import '../styles/style.css';
import Menu from "./menu.js";
import Scroll from "./scroll.js";
import {setupTheme} from "./theme.js";

const menu = new Menu(
    document.querySelector('.menu'),
    document.querySelector('.menu-button.menu-button--open'),
    document.querySelector('.menu-button.menu-button--close'),
    'menu--active'
);
menu.init();

const scroll = new Scroll(
    menu,
    '.main__quick-nav',
    'nav-list__item--active'
);
scroll.init();

const theme = setupTheme(document.querySelector('.theme-switcher'));
theme.applyTheme();