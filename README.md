# MNTN

Практическая работа

![Vite](https://img.shields.io/badge/Vite-ffdb33?style=flat&logo=vite)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=postcss)
![PNPM](https://img.shields.io/badge/pnpm-white?style=flat&logo=pnpm)

[![pages-build-deployment](https://github.com/smkthat/mntn-longread/actions/workflows/pages/pages-build-deployment/badge.svg?branch=master)](https://github.com/smkthat/mntn-longread/actions/workflows/pages/pages-build-deployment)

[Посмотреть сайт](https://smkthat.github.io/mntn-longread/)

- [Задача](#task)
- [Реализация](#realisation)
- [Сборка](#build)
- [TODO](#todo)

## Задача

<div id="task"></div>

Создать веб-страницу с адаптивной
версткой [по макету](https://www.figma.com/design/EYKgZvtO2cVud0mwhPK5mm/%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C5?node-id=0-1&t=CvXUxBR2A8gUk8tN-0)

<details>
  <summary>Показать скриншот</summary>

![screenshot.png](docs/screenshot.png)

</details>

### Требования к адаптивности

Веб-страница должна корректно отображаться на устройствах с различными
размерами экранов и адекватно реагировать на
изменения размеров окна браузера, при этом, верстка не должна ломаться 
на промежуточных размерах.

### Использование медиа-запросов

Необходимо использовать `@media` для адаптивного изменения стилей в зависимости
от размеров экрана.

### Кроссбраузерная совместимость

Веб-страница должна выглядеть одинаково в различных
браузерах (`Chrome`, `Firefox`, `Safari`, `Edge`).

### Использование технологий

Рекомендуется использовать `Flexbox` и `Grid Layout` для создания гибкой 
и современной верстки.

### Функциональность

Добавьте возможность отображения мобильного меню. Реализация производится 
с помощью `JavaScript`.

####   * Дополнительно: По желанию, можно добавить изменение темы - темная/светлая

## Реализация

<div id="realisation"></div>

Для решения данной задачи использовались [БЭМ](https://bem.info/) методология 
(на сколько я ее смог понять) и подход к стилизации 
начиная с самого маленького экрана 320px.

Для поддержки "резиновости" и адаптивности используются `Flex layouts`
и `@media` запросы.

Немного добавил "своей вкусовщины" 🤭

- Баннер с паралакс фоном
- Интерактивные анкерные ссылки
- Простые анимации

Также написаны скрипты для работы с локальным хранилищем, изменением темы,
управлением меню, прелоадер, параллакс, а также класс для управления поведением 
при прокрутке страницы (анкерные ссылки).

### Инструменты и технологии:

- Менеджер пакетов `pnpm`
- Сборщик `Vite`
- Процессор CSS `PostCSS` с применением плагинов для работы с вложенностью,
  медиа запросами и миксинами
- Сборка и деплой на `GitHub Pages`

## Сборка/Запуск

<div id="build"></div>

Установка зависимостей

```bash
pnpm i
```

Запуск в режиме разработки

```bash
pnpm run dev
```

Сборка проекта

```bash
pnpm build
```

Запуск сборки

```bash
pnpm run preview
```

## TODO

<div id="realisation"></div>

- [x] <strike>Конфигурация проекта</strike>
- [x] <strike>Верстка хэдера и адаптив</strike>
- [x] <strike>Верстка футера и адаптив</strike>
- [x] <strike>Верстка контентной части и адаптив</strike>
- [x] <strike>Сборка и деплой на GitHub Pages</strike>
- [x] <strike>Верстка боковой навигационной панели</strike>
- [x] <strike>Верстка баннера и адаптив</strike>
- [ ] Декомпозиция компонентов и стилей
- [ ] Мета-тэги, favicon, базовое SEO
- [ ] Поиск и исправление багов
