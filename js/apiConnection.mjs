import { rankedGames } from "../testData.mjs";
const baseURL = "https://api.rawg.io/api/games?key=71096a92109e4013a8500b111cda5481";

export async function fetchURL(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data
}

export async function getGames(page_size, page) {
    const response = await fetch(`${baseURL}&page_size=${page_size}&page=${page}&ordering=-rating`);
    const data = await response.json();

    return data
}

export async function getUpcoming(page_size, page) {
    const response = await fetch(`${baseURL}`);
    const data = await response.json();

    return data
}

export async function customSearch(page_size, page, filterData) {
    let url = `${baseURL}&page_size=${page_size}&page=${page}&ordering=-rating`;

    if (filterData.search.trim() != '') {
        url += `&search=${filterData.search.trim()}`;
    }
    if (filterData.genre != '') {
        url += `&genres=${filterData.genre}`;
    }
    if (filterData.platform != '') {
        url += `&platforms=${filterData.platform}`;
    }
    if (filterData.release != '') {
        url += `&dates=${filterData.release}-01-01,${filterData.release + 1}-01-01`;
    }

    const response = await fetch(url);
    const data = await response.json();

    return data
}

export async function getGenres() {
    const response = await fetch('https://api.rawg.io/api/genres?key=71096a92109e4013a8500b111cda5481');
    const data = await response.json();

    return data
}

export async function getPlatforms() {
    const response = await fetch('https://api.rawg.io/api/platforms?key=71096a92109e4013a8500b111cda5481');
    const data = await response.json();

    return data
}

// &dates=2023-01-01,2024-01-01
// https://api.rawg.io/api/games?key=71096a92109e4013a8500b111cda5481&page_size=3&page=1&search=The Witcher 3

// api call for genre and platform filters

// api call for search