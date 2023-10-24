import Game from "./game.mjs";
import { getLocalStorage } from "./utility.mjs";

export default class GamesList {
    constructor() {
        this.games;
        this.name;
        this.description;
    }
    loadList(listDict) {
        this.name = listDict.name;
        this.description = listDict.description;
        this.games = listDict.games;

        return
    }
    displayListName(parentElement) {
        const h3 = document.createElement('h3');
        h3.textContent = this.name;

        parentElement.appendChild(h3);

        return
    }
    displayListGames(parentElement) {
        parentElement.innerHTML = "";

        // Description
        const description = document.createElement('div');
        description.className = 'list-description';

        const p = document.createElement('p');
        p.textContent = this.description;
        description.appendChild(p);
        parentElement.appendChild(description);

        // List Games
        this.games.forEach(gameInfo => {
            const game = new Game(`#${parentElement.id}`, gameInfo);
            game.generateCard();
        });
        
        return
    }

    convertToJSON() {
        const jsonObject = {
            name: this.name,
            description: this.description,
            games: this.games,
        }

        return jsonObject
    }
}