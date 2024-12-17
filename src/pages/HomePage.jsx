import CardTour from "../components/CardTour.jsx";

export default function HomePage() {
    return (
        <section className='container-lg mt-3 '>
            <div className='bg-dark p-2 d-flex flex-column gap-2 rounded-4 table p-3'>

                {/* search bar */}
                <div className="searchBar">
                    <form className="d-flex mb-3" role="search">
                        <input
                            className="form-control rounded-4"
                            type="search"
                            placeholder="Cerca Il Viaggio"
                            aria-label="Search"
                        />
                    </form>
                </div>

                {/* card per i viaggi */}
                <CardTour />

            </div>
        </section>
    )
}