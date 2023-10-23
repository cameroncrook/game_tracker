import { init, getLocalStorage, setLocalStorage, getLists, getFormData } from "../../js/utility.mjs";
import GamesList from "../../js/gamesList.mjs";

init()

const form = document.querySelector('.create-form');

document.getElementById('create-list-button').addEventListener('click', formToggle);
document.querySelector('menu-close-icon').addEventListener('click', formToggle);

// Form event listener
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = getFormData(form);

    formData["games"] = [];

    if (localStorage.getItem('lists')) {
        let lists = getLocalStorage('lists');

        lists.push(formData);

        setLocalStorage('lists', lists);
    } else {
        setLocalStorage('lists', [formData]);
    }

    form.querySelector('input').value = '';
    form.querySelector('textarea').value = '';

    formToggle();

    const listSection = document.querySelector('#list-section');
    const gameSection = document.querySelector('#list-game-section');

    const newList = new GamesList();
    newList.description = formData.description;
    newList.name = formData.name;
    newList.games = formData.games;

    addToLists(newList, true);

    return;
})

function main() {
    const lists = getLists();

    let first = true;
    lists.forEach(gameList => {
        if (first) {
            first = false;
            addToLists(gameList, true);
        } else {
            addToLists(gameList); 
        }
    })

    return
}

// Adds a single gamesList class instance to the list section
function addToLists(gameList, active=false) {
    const listSection = document.querySelector('#list-section');
    const gameSection = document.querySelector('#list-game-section');

    const listDiv = document.createElement('div');
    listDiv.className = 'list-div';

    gameList.displayListName(listDiv);

    listDiv.addEventListener('click', function() {
        resetActive();

        listDiv.classList.add('active');

        gameList.displayListGames(gameSection);
    })

    if (active) {
        resetActive();

        listDiv.classList.add('active');
        gameList.displayListGames(gameSection);
    }

    listSection.appendChild(listDiv);

    return
}

function resetActive() {
    const previousActive = document.querySelectorAll('.active');
    previousActive.forEach(element => {
        element.classList.remove('active');
    })

    return
}

// Displays and hides the form
function formToggle() {
    const form = document.querySelector('.create-form');

    form.classList.toggle('d-none');
    form.classList.toggle('flex-vertical-evenly');
}

main()