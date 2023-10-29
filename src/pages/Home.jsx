import { FilmsList } from "components/FilmsList/FilmsList";
import { getTrendingFilms } from "components/Service"
import { useEffect, useState } from "react"


const Home = () => {
    const [films, setFilms] = useState([]);



    useEffect(() => {
        getTrendingFilms()
            .then((response) => {
                const trendingFilms = response.results;
                setFilms(trendingFilms);
            })
            .catch((error) => {
                console.error('Помилка при отриманні фільмів:', error);
            });
    }, []);

    return (
        <main>
            <h1>Trending today:</h1>
            {films.length > 0 && <FilmsList films={films} />}
        </main>
    )
}

export default Home;