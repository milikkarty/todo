import Search from "./Search";

const Header = ({ search, setSearch }) => {
    return (
        <header>
            <Search search={search} setSearch={setSearch} />
            <h1>To-do or not to-do</h1>
            <p>About</p>
        </header>
    )
}

export default Header;