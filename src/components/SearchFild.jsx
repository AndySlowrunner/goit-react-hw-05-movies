export const SearchFild = ({ query, onChange }) => {


    return (
        <form>
            <input
                type="text"
                value={query}
                onChange={(e) => {onChange(e.target.value);}}
            />
            <button type="submit">Search</button>
        </form>
    )
}