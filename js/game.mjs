import { gameCard } from "../components/game-card-template.mjs";

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

        gameCard(this.parentSelector, this.thumnail, this.name, this.genres);

        return
    }
}