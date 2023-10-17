// import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { getFilmDetails } from "components/Service"

export const MovietDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const { title, overview, genres } = movie;

    useEffect(() => {
        getFilmDetails(id)
            .then((response) => {
                const filmDetails = response;
                setMovie(filmDetails);
            })
            .catch((error) => {
                console.error('Помилка при отриманні фільмів:', error);
            });
    }, [id]);

    return (
        <main>
            <h2>{title}</h2>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
            {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
            ))}
            </ul>            
            <p>Information</p>
        </main>
    )
    
}
