import '../styles/style.css';
import javascriptLogo from '../assets/javascript.svg';
import viteLogo from '../assets/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('.app').innerHTML = `
  <div class="app__container">
    <a href="https://vitejs.dev" target="_blank" class="app__link">
      <img src="${viteLogo}" class="app__logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="app__logo app__logo--vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="app__title">Hello Vite!</h1>
    <div class="card">
      <button class="card__button" id="counter" type="button"></button>
    </div>
    <p class="app__read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
