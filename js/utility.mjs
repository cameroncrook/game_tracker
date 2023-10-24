import { loadHeader } from "../components/header-footer-template.mjs";
import { renderNavBar } from "../components/navbarTemplate.mjs";
import GamesList from "./gamesList.mjs";

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

// Gets the lists from local storage and creates class instances for each list
export function getLists() {
    let lists = [];
    if (localStorage.getItem('lists')) {
        const listData = getLocalStorage('lists');
    
        listData.forEach(list => {
            const gamesList = new GamesList();

            gamesList.loadList(list);

            lists.push(gamesList);
        });
    }

    return lists
}

export function getFormData(form) {
    const formData = new FormData(form),
        convertedJSON = {};

    formData.forEach(function (value, key) {
        convertedJSON[key] = value;
    });

    return convertedJSON
}
