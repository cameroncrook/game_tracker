import { init, getLocalStorage, setLocalStorage, getLists, getFormData } from "../../js/utility.mjs";
import GamesList from "../../js/gamesList.mjs";

init()

const form = document.querySelector('.create-form');

document.getElementById('create-list-button').addEventListener('click', formToggle);

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

    return;
})

function main() {
    const lists = getLists();

    const listSection = document.querySelector('#list-section');
    const gameSection = document.querySelector('#list-game-section');

    let first = true;
    lists.forEach(gameList => {
        const listDiv = document.createElement('div');
        listDiv.className = 'list-div';

        gameList.displayListName(listDiv);

        listDiv.addEventListener('click', function() {
            const previousActive = document.querySelectorAll('.active');
            previousActive.forEach(element => {
                element.classList.remove('active');
            })

            listDiv.classList.add('active');

            gameList.displayListGames(gameSection);
        })

        if (first) {
            listDiv.classList.add('active');
            gameList.displayListGames(gameSection);

            first = false;
        }

        listSection.appendChild(listDiv);
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