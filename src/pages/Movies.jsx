import { FilmsList } from "components/FilmsList";
import { SearchFild } from "components/SearchFild"
import { searchFilmByQuery } from "components/Service";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [films, setFilms] = useState([]);
    const query = searchParams.get('query') ?? '';

    // console.log(query);
    
    const handleChange = (value) => {

        setSearchParams({ query: value });
    };



    useEffect(() => {
        searchFilmByQuery(query)
            .then(response => {
                const newFilms = response.results;
                setFilms(newFilms);
            })
            .catch(error => {
                console.error('Помилка при отриманні масиву фільмів', error)
            });
    }, [query]);
    
    return (
        <main>
            <SearchFild
                query={query}
                onChange={handleChange} />
            {films.length > 0 && <FilmsList films={films} />}
            
        </main>
    )
}