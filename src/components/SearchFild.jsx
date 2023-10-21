export const SearchFild = ({ query, onSubmit }) => {


    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={query}
                // onChange={(e) => {onChange(e.target.value);}}
            />
            <button type="submit">Search</button>
        </form>
    )
}