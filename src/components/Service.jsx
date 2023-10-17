import axios from "axios";

const API_KEY = '233c7f71dccea172993da041a5656481';

export const getTrendingFilms = async() => {
    
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`);
        return response.data;
    } catch (error) {

        console.error("Помилка при отриманні трендових фільмів:", error);
        throw error;
    }
}

export const getFilmDetails = async(id) => {
    
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
        return response.data;
    } catch (error) {

        console.error("Помилка при отриманні інфо про фільм:", error);
        throw error;
    }
}