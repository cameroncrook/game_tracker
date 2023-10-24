import { getGames, customSearch } from "../../js/apiConnection.mjs";
import Game from "../../js/game.mjs";
import { init } from "../../js/utility.mjs";

async function generateHome() {

    let filterData = {
        search: '',
        genre: '',
        platform: '',
        release: '2023'
    }

    const data = await customSearch(3, 1, filterData);
    data.results.forEach(item => {
        const game = new Game('#top-games', item);
        game.generateCard();
    });

    filterData.release = '2024';

    const upcomingData = await customSearch(3, 1, filterData);
    upcomingData.results.forEach(item => {
        const upcomingGame = new Game('#upcoming-games', item);
        upcomingGame.generateCard();
    });
}

generateHome();

init();
