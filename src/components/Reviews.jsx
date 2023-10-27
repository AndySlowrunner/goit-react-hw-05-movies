import { useParams } from "react-router-dom"
import { getFilmReviews } from "./Service"
import { useEffect, useState } from "react";

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        getFilmReviews(id)
            .then((response) => {
                const newReviews = response;
                setReviews(newReviews);
            })
            .catch(error => {
                console.error('Помилка при зміні результатів запиту:', error)
            })
    
    }, [id]);    
    
    return (
        <div>
            {reviews.results && reviews.results.length > 0 ? (
                <ul>
                    {reviews.results.map(result => (
                        <li key={result.id}>
                            <h3>Author: {result.author}</h3>
                            <p>{result.content}</p>
                        </li>))}
                </ul>
            ) : (<p>We don't have any reviews for this movie.</p>)
            }
        </div>
    )
}

export default Reviews;