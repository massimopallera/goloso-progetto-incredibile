import { useEffect, useState } from "react";
import CardTour from "../components/CardTour.jsx";
import viaggi from "../database/viaggi.js";

export default function HomePage() {

    const [search, setSearch] = useState('')
    const [filteredTrips, setFilteredTrips] = useState(viaggi)

    useEffect(() => {
        setFilteredTrips(viaggi.filter(trip => trip.nome.toLowerCase().includes(search.toLowerCase())))
    }, [search])

    return (
        <section className='container-lg '>
            <div className='bg-dark mb-0 d-flex flex-column gap-2 rounded-4 table p-3 pt-5'>

                {/* search bar */}
                <div className="searchBar">
                    <form className="d-flex mb-3" role="search">
                        <input
                            className="form-control rounded-4"
                            type="search"
                            placeholder="Cerca Il Viaggio"
                            aria-label="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </div>

                {/* card per i viaggi */}
                <CardTour filteredTrips={filteredTrips} />

            </div>
        </section>
    )
}