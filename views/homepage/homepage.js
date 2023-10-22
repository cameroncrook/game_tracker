import { getGames } from "../../js/apiConnection.mjs";
import Game from "../../js/game.mjs";
import { init } from "../../js/utility.mjs";

async function generateHome() {
    const data = await getGames(3, 1);
    data.results.forEach(item => {
        const game = new Game('#top-games', item);
        game.generateCard();
    });

    const upcomingData = await getGames(3, 1);
    upcomingData.results.forEach(item => {
        const upcomingGame = new Game('#upcoming-games', item);
        upcomingGame.generateCard();
    });
}

generateHome();

init();
