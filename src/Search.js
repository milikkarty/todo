const Search = ({ search, setSearch }) => {
    return (
        <form className="Search">
            <label htmlFor="search">Search</label>
            <input
                id="search"
                placeholder="Search..."
                role="searchbox"
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </form>
    )
}

export default Search;