import { rankedGames } from "../testData.mjs";
const baseURL = "https://api.rawg.io/api/games?key=71096a92109e4013a8500b111cda5481";

export async function getHighestRated(page_size, page) {
    // const response = await fetch(`${baseURL}&page_size=${page_size}&page=${page}&ordering=-rating`);
    // const data = await response.json();
    
    const data = rankedGames;

    return data
}

export async function getUpcoming(page_size, page) {
    const response = await fetch(`${baseURL}`);
    const data = await response.json();

    return data
}

// api call for genre and platform filters

// api call for search