export default function SearchBar({ setSearch, search, placeholder }) {
    return (
        <div className="searchBar container">
            <form className="d-flex mb-3 justify-content-center " role="search">
                <input
                    className="form-control rounded-4"
                    style={{ width: '300px', height: '35px' }}
                    type="search"
                    placeholder={placeholder}
                    aria-label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
    )
}