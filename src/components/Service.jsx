import axios from "axios";

const API_KEY = '233c7f71dccea172993da041a5656481';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const params = {
    api_key: API_KEY,
    language: 'en - US'
}

export const getTrendingFilms = async() => {
    
    try {
        const response = await axios.get('trending/all/day', {params});
        return response.data;
    } catch (error) {

        console.error("Помилка при отриманні трендових фільмів:", error);
        throw error;
    }
}

export const getFilmDetails = async(id) => {
    
    try {
        const response = await axios.get(`movie/${id}`, {params});
        return response.data;
    } catch (error) {

        console.error("Помилка при отриманні інфо про фільм:", error);
        throw error;
    }
}

export const getFilmCredits = async(id) => {
    
    try {
        const response = await axios.get(`movie/${id}/credits`, {params});
        return response.data;
    } catch (error) {

        console.error("Помилка при отриманні списку акторів:", error);
        throw error;
    }
}

export const getFilmReviews = async(id) => {
    
    try {
        const response = await axios.get(`movie/${id}/reviews?page=1`, {params});
        return response.data;
    } catch (error) {

        console.error("Помилка при отриманні відгуків:", error);
        throw error;
    }
}

export const searchFilmByQuery = async(query) => {
    
    try {
        const response = await axios.get(`search/movie?query=${query}&include_adult=false&page=1`, {params});
        return response.data;
    } catch (error) {

        console.error("Помилка при пошуку фільмів:", error);
        throw error;
    }
}
