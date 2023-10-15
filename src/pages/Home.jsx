import { getTrendingFilms } from "components/Service"
import { useEffect, useState } from "react"

export const Home = () => {
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
            <ul>
                {films.map(film =>
                    <li key={film.id}>
                        <p>{film.title || film.name}</p>
                    </li>
                )}
            </ul>
        </main>
    )
}