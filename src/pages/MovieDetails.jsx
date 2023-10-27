import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react"
import { getFilmDetails } from "components/Service"
import { StyledAddInfo, StyledBox, StyledLink, StyledText } from "./MovieDetails.styled";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from);

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

    const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

    return (
        <main>
            <StyledLink to={backLinkLocationRef.current}>Go back</StyledLink>
            <StyledBox>
                <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg}
                    width={250}
                    alt="poster"
                />
                <StyledText>
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
                </StyledText>
            </StyledBox>
            <StyledAddInfo>
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </StyledAddInfo>
            <Suspense fallback={<div>Loading subpage ...</div>}>
                <Outlet />
            </Suspense>
        </main>
    )
}

export default MovieDetails;