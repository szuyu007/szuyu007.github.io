import { initNavbar } from './navbar.js';
import { initProjects } from './projects.js';

const ready = (fn) =>
  document.readyState !== 'loading'
    ? fn()
    : document.addEventListener('DOMContentLoaded', fn, { once: true });

ready(() => {
  initNavbar();
  initProjects();
});
