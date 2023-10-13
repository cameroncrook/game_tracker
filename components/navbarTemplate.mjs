import { lightMode, darkMode } from "../js/utility.mjs";

export async function renderNavBar() {
    const body = document.querySelector('body');

    const response = await fetch('/components/navbar.html');
    const html = await response.text();

    const div = document.createElement('div');
    div.id = "nav-bar";
    div.className = "d-none";
    div.innerHTML = html;

    div.querySelector('.menu-close-icon').addEventListener('click', function () {
        div.classList.add('d-none');
        div.classList.remove('nav-grid');
    })

    const toggleSwitch = div.querySelector('.toggle-capsule');
    const toggleIndicator = div.querySelector('.toggle-indicator');
    toggleSwitch.addEventListener('click', function () {
        toggleIndicator.classList.toggle('toggle-right');
        toggleIndicator.classList.toggle('toggle-left');

        const mode = localStorage.getItem('mode');

        if (!mode) {
            localStorage.setItem('mode', 'light');
            lightMode();
        } else if (mode == 'light') {
            localStorage.setItem('mode', 'dark');
            darkMode();
        } else if (mode == 'dark') {
            localStorage.setItem('mode', 'light');
            lightMode();
        }
    })

    body.appendChild(div);

    return
}