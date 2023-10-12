import { getHighestRated } from "../../js/apiConnection.mjs";
import Game from "../../js/game.mjs";
import { init } from "../../js/utility.mjs";

async function generateHome() {
    const data = await getHighestRated(3, 1);
    data.results.forEach(item => {
        const game = new Game('#top-games', item);
        game.generateCard();
    });
}

generateHome();

init();
