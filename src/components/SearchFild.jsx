export const SearchFild = ({ query, onChange }) => {

    return (
        <form>
            <input
                type="text"
                value={query}
                onChange={(e) => onChange(e.currentTarget.value)}
            />
            <button type="button">Search</button>
        </form>
    )
}