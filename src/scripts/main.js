import Preloader from "./preloader.js";
import Menu from "./menu.js";
import Scroll from "./scroll.js";
import Parallax from "./parallax.js";

import LogoRaw from "../assets/logo.svg?raw";
import IconAccountRaw from "../assets/icons/icon--user.svg?raw";
import IconInstagramRaw from "../assets/icons/icon--instagram.svg?raw";
import IconTwitterRaw from "../assets/icons/icon--twitter.svg?raw";
import IconArrowRight from "../assets/icons/icon--arrow-right.svg?raw";
import IconArrowDown from "../assets/icons/icon--arrow-down.svg?raw";
import IconLightRaw from "../assets/icons/icon--day.svg?raw";
import IconDarkRaw from "../assets/icons/icon--moon.svg?raw";
import IconBurgerRaw from "../assets/icons/icon--burger.svg?raw";
import IconCrossRaw from "../assets/icons/icon--cross.svg?raw";
import IconGithubRaw from "../assets/icons/icon--github.svg?raw";
import {setupTheme} from "./theme.js";

import '../styles/style.css';

const preloader = new Preloader();
preloader.preloader.innerHTML += LogoRaw;
preloader.init();

const menuElement = document.querySelector('.menu');
const menuOpenElement = document.querySelector('.menu-button.menu-button--open');
const menuCloseElement = document.querySelector('.menu-button.menu-button--close');

menuOpenElement.innerHTML = IconBurgerRaw;
menuCloseElement.innerHTML = IconCrossRaw;

const menu = new Menu(
  menuElement,
  menuOpenElement,
  menuCloseElement,
  'menu--active'
);
menu.init();

const scroll = new Scroll(menu, '.hero__quick-nav', 'nav-list__item--active');
scroll.init();

document.querySelector('.hero__link').innerHTML += IconArrowDown;

document.querySelectorAll('.nav-logo').forEach(logo => {
  logo.innerHTML += LogoRaw;
});

const accountElement = document.querySelector('.menu__account');
accountElement.innerHTML = `${IconAccountRaw}${accountElement.innerHTML}`;

document.querySelectorAll('.follow').forEach(followEl => {
  followEl.children[1].innerHTML += IconInstagramRaw;
  followEl.children[2].innerHTML += IconTwitterRaw;
});

document.querySelectorAll('.article__heading .heading__link').forEach(
  link => {
    link.innerHTML += IconArrowRight;
  }
);

document.querySelector('.footer__copyright .nav-link').innerHTML += IconGithubRaw;

const themeSwitcherElement = document.querySelector('.theme-switcher');
themeSwitcherElement.innerHTML += IconLightRaw;
themeSwitcherElement.innerHTML += IconDarkRaw;

const themeManager = setupTheme(themeSwitcherElement);
themeManager.applyTheme();

const parallaxData = [
  {"layer": 2, "shift": 1},
  {"layer": 4, "shift": 2}
];

document.addEventListener('DOMContentLoaded', () => {
  new Parallax('.parallax-image', 1024, parallaxData);
});
