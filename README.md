# URL Shortening

Project created to showcase my skills in the frontend fundamentals (HTML/SCSS/Vanilla JS).

## Table of contents

- [The project](#the-project)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [Project setup](#project-setup)

## The project

Integration with API ([see URL Shortening Serverless API repository](https://github.com/leandrodalmolin/url-shortening-server)) to create shortened URLs and display them on the website.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty or invalid

Project idea and designs are from [Shortly URL shortening API Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G) but the integration is done with my own built API instead of using the one suggested by the challenge.

## Screenshot

![](./screenshot.png)

## Links

- Live Site URL: [https://shrtl.netlify.app/](https://shrtl.netlify.app/)

## Built with

- Semantic HTML
- SCSS (BEM methodology)
- Vanilla JavaScript - ES6 features
  - Classes, Promises, Modules, Template Literals...
- LocalStorage
- SVG sprite for icons and SVG in an <img> tag for the complex graphic
- Webpack - Static module bundle
  - Babel, ESLint, Stylelint, SASS Loader, CSS Minifier, PostCSS (Autoprefixer)
- URL Shortening Serverless API (Node, Express, MongoDB, Serverless)

## Project setup
```
npm install
```

### Compiles for development and watches files to recompile whenever they change
```
npm run watch
```

### Compiles and hot-reloads for development
```
npm run dev-server
```

### Compiles and minifies for production
```
npm run build
```
