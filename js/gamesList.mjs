import { getHighestRated } from "./apiConnection.mjs";
import Game from "./game.mjs";

// get rid of this and just do it in the page js files?

export default class GamesList {
    constructor() {
        this.games;
    }

    async getGames(apiCall) {
        let data = null;

        if (apiCall == 'rank') {
            data = await getHighestRated(3, 1);
        }

        if (data != null) {
            const gameData = data.results;

            gameData.forEach(item => {
                const game = new Game(item);
                game.init();
            });
        }
        
    }
}