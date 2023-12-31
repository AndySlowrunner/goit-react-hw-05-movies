import { useState } from "react"

export const SearchFild = ({onSubmit}) => {

    const [value, setValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') {
            alert("Please enter a movie title");
            return
        }
        onSubmit(value);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}