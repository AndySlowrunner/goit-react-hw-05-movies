import axios from "axios";

// const API_KEY = '233c7f71dccea172993da041a5656481';

export const getTrendingFilms = async() => {
    const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?language=en-US')
    return response
}