import { lightMode, darkMode } from "../js/utility.mjs";

export async function renderNavBar() {
    const body = document.querySelector('body');

    const response = await fetch('components/navbar.html');
    const html = await response.text();

    const div = document.createElement('div');
    div.id = "nav-bar";
    div.className = "d-none";
    div.innerHTML = html;

    div.querySelector('.menu-close-icon').addEventListener('click', function () {
        div.classList.add('d-none');
        div.classList.remove('nav-grid');
    })

    // Color Theme Toggle
    const mode = localStorage.getItem('mode');
    const toggleSwitch = div.querySelector('.toggle-capsule');
    const toggleIndicator = div.querySelector('.toggle-indicator');

    if (!mode) {
        toggleIndicator.classList.add('toggle-right');
    } else if (mode == 'light') {
        toggleIndicator.classList.add('toggle-left');
        lightMode();
    } else if (mode == 'dark') {
        toggleIndicator.classList.add('toggle-right');
    }

    toggleSwitch.addEventListener('click', function () {
        toggleIndicator.classList.toggle('toggle-right');
        toggleIndicator.classList.toggle('toggle-left');

        console.log('clicked');

        if (!mode) {
            console.log('none-light');
            localStorage.setItem('mode', 'light');
            lightMode();
        } else if (mode == 'light') {
            console.log('switch to dark');
            localStorage.setItem('mode', 'dark');
            darkMode();
        } else if (mode == 'dark') {
            console.log('switched to light');
            localStorage.setItem('mode', 'light');
            lightMode();
        }
    })

    body.appendChild(div);

    return
}