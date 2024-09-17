import '../styles/style.css';
import javascriptLogo from '../assets/javascript.svg';
import viteLogo from '../assets/vite.svg';
import {setupCounter} from './counter.js';
import {setupTheme} from "./theme.js";

const themeSwitcher = document.querySelector('.theme-switcher');
themeSwitcher.innerHTML = `
    <input class="theme-switcher__check" type="checkbox" />
    <div class="theme-switcher__icon"></div>
`;
setupTheme(themeSwitcher);

document.querySelector('.content').innerHTML = `
  <div class="content__container">
    <a href="https://vitejs.dev" target="_blank" class="app__link">
      <img src="${viteLogo}" class="content__logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="content__logo content__logo--vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="content__title">Hello Vite!</h1>
    <div class="content__card card">
      <button class="card__button button" id="counter" type="button"></button>
    </div>
    <p class="content__read-the-docs">
      Click on the <a href="https://vitejs.dev" target="_blank">Vite logo</a> to learn more
    </p>
  </div>
`;

const counter = setupCounter(document.querySelector('#counter'));
