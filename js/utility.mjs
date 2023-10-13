import { loadHeader } from "../components/header-footer-template.mjs";
import { renderNavBar } from "../components/navbarTemplate.mjs";

export function init() {
    loadHeader();

    renderNavBar();

    return
}

export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function lightMode() {
    const root = document.documentElement;

    root.style.setProperty('--background-color', '#cccccc');
    root.style.setProperty('--secondary-background', '#ffffff');
    root.style.setProperty('--text-background', '#1e1e1e');
}

export function darkMode() {
    const root = document.documentElement;

    root.style.setProperty('--background-color', '#1e1e1e');
    root.style.setProperty('--secondary-background', '#333333');
    root.style.setProperty('--text-background', '#ffffff');
}