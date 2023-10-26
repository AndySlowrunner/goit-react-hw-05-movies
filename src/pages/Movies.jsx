import { FilmsList } from "components/FilmsList";
import { SearchFild } from "components/SearchFild"
import { searchFilmByQuery } from "components/Service";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams({});
    const [films, setFilms] = useState([]);
    const userQuery = searchParams.get('query') ?? '';

    // console.log(userQuery);
    
    const handleChange = (value) => {
        const newParams = value !== '' ? { query: value } : {};
        setSearchParams(newParams);
    };

    useEffect(() => {
        if (userQuery !== '') {
            searchFilmByQuery(userQuery)
                .then(response => {
                    const newFilms = response.results;
                    setFilms(newFilms);
                })
                .catch(error => {
                    console.error('Помилка при отриманні масиву фільмів', error)
                });
        }
    }, [userQuery]);
    
    return (
        <main>
            <SearchFild
                query={userQuery}
                onChange={handleChange} />
            {films.length > 0 && <FilmsList films={films} />}
        </main>
    )
}