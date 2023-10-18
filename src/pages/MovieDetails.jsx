import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { getFilmDetails } from "components/Service"

export const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    
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
            <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg'}
                width={320} alt="poster"
            />
            {movie.title ? <h2>{movie.title}</h2> : null}
            {movie.vote_average ? <p>User Score: {movie.vote_average.toFixed(1) * 10}%</p> : null}
            {movie.overview ? (
            <div>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
            </div>
            ) : null}
            {movie.genres ? (
            <div>
                <h3>Genres</h3>
                <ul>
                {movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
                </ul>
            </div>
            ) : null}
            <p>Additional information</p>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet/>
        </main>
    )
}

