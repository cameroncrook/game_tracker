import { gameCard } from "../components/game-card-template.mjs";
import { getLists, setLocalStorage } from "./utility.mjs";
import GamesList from "./gamesList.mjs";

export default class Game {
    constructor(parentSelector, gameData) {
        this.parentSelector = parentSelector;
        this.gameData = gameData;
        this.id;
        this.name;
        this.platforms;
        this.genres;
        this.tags;
        this.thumnail;
    }
    
    generateCard() {
        this.id = this.gameData.id;
        this.name = this.gameData.name;
        this.platforms = this.gameData.parent_platforms;
        this.genres = this.gameData.genres;
        this.tags = this.gameData.tags;
        this.thumnail = this.gameData.background_image;

        gameCard(this.parentSelector, this.thumnail, this.name, this.genres, this);

        return
    }

    addToList(list) {
        // an array of gamesList instances
        const lists = getLists();

        let gameList = lists[list];

        gameList.games.forEach(game => {
            if (game.id == this.id) {
                return
            }
        });

        gameList.games.push(this.gameData);

        lists[list] = gameList;

        // let jsonObject = [];
        // lists.forEach(item => {
        //     jsonObject.push(item.convertToJSON())
        // })

        setLocalStorage('lists', lists);

        return
    }
}