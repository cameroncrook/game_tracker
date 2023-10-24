export function loadHeader() {
    const header = document.querySelector('header');

    const menuIcon = document.createElement('img');

    menuIcon.src = '/game_tracker/images/more.png';

    menuIcon.className = 'menu-icon';
    menuIcon.addEventListener('click', function() {
        document.querySelector('#nav-bar').classList.remove('d-none');
        document.querySelector('#nav-bar').classList.add('nav-grid');
    });

    header.appendChild(menuIcon);

    return
}