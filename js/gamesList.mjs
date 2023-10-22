import Game from "./game.mjs";
import { getLocalStorage } from "./utility.mjs";

export default class GamesList {
    constructor(listDict) {
        this.listDict = listDict;
        this.games;
        this.name;
        this.description;
    }
    loadList() {
        this.name = this.listDict.name;
        this.description = this.listDict.description;
        this.games = this.listDict.games;

        return
    }
    displayListName(parentElement) {
        const h3 = document.createElement('h3');
        h3.textContent = this.name;

        parentElement.appendChild(h3);

        return
    }
    displayListGames(parentElement) {
        this.games.forEach(gameInfo => {
            const game = new Game(parentElement, gameInfo);
            game.generateCard();
        });
        
        return
    }
}