import { useParams } from "react-router-dom"
import { getFilmReviews } from "./Service"
import { useEffect, useState } from "react";

export const Reviews = () => {
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
            {reviews.results ? (
                    <ul>
                        {reviews.results.map(result => (
                            <li key={result.id}>
                                <h3>Author: {result.author}</h3>
                                <p>{result.content}</p>
                            </li>))}
                    </ul>
                ) : ('На даний момент відгуків немає.')
            }
        </div>
    )
}