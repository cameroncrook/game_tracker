import { init, getFormData } from "../../js/utility.mjs";
import { customSearch, getGenres, getPlatforms, getGames, fetchURL } from "../../js/apiConnection.mjs";
import Game from "../../js/game.mjs";

init()

// Filter Form
const form = document.querySelector('#filter-form');

generateSelects();

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.textContent = 'Loading...'
    const formData = getFormData(form);

    const response = await customSearch(9, 1, formData);
    if (response) {
        submitBtn.textContent = "Search";
    }
    
    displayData(response);

    form.reset();

    return
})

// Get Standard data
async function displayInit() {
    const games = await getGames(9, 1);

    displayData(games);

    return
}

displayInit();

async function generateSelects() {
    const genreSelect = document.getElementById('genre-select');
    const genres = await getGenres();
    genres.results.forEach(genreData => {
        const option = document.createElement('option');
        option.value = genreData.id;
        option.textContent = genreData.name;

        genreSelect.appendChild(option);
    });

    const platformSelect = document.getElementById('platform-select');
    const platforms = await getPlatforms();
    platforms.results.forEach(platformData => {
        const option = document.createElement('option');
        option.value = platformData.id;
        option.textContent = platformData.name;

        platformSelect.appendChild(option);
    })

    const releaseSelect = document.getElementById('release-select');
    const currentYear = new Date().getFullYear();

    for (let i = 2000; i < (currentYear + 2); i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        releaseSelect.appendChild(option);
    }
}

async function displayData(data) {
    document.querySelector('.card-group').innerHTML = "";

    data.results.forEach(gameData => {
        const game = new Game('.card-group', gameData);

        game.generateCard();
    })

    getPagination(data);

    return
}

function getPagination(data) {
    const section = document.querySelector('.pagination');
    section.innerHTML = "";

    if (data.previous != null) {
        const previousBtn = document.createElement('button');
        previousBtn.className = "previous-btn";
        previousBtn.textContent = "Previous";

        previousBtn.addEventListener('click', async function() {
            const data = await fetchURL(data.previous);

            displayData(data);

            return
        })

        section.appendChild(previousBtn);
    }
    if (data.next != null) {
        const nextBtn = document.createElement('button');
        nextBtn.className = "next-btn";
        nextBtn.textContent = "Next";

        nextBtn.addEventListener('click', async function() {
            const data = await fetchURL(data.next);

            displayData(data);

            return
        })

        section.appendChild(nextBtn);
    }

    return
}