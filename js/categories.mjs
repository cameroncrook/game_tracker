import { getLocalStorage, setLocalStorage } from "./utility.mjs";

export default class Category {
    constructor() {
        this.lists;
    }

    // Gets lists out of local storage
    loadLists() {
        const lists = getLocalStorage('lists');

        this.lists = lists;
    }

    // uploads list to local storage
    uploadLists() {
        setLocalStorage('lists', this.lists);

        return
    }
}