import { useEffect, useState } from "react";
import CardTour from "../components/CardTour.jsx";
import viaggi from "../database/viaggi.js";
import SearchBar from "../components/SearchBar.jsx";

export default function HomePage() {

    const [search, setSearch] = useState('')
    const [filteredTrips, setFilteredTrips] = useState(viaggi)

    useEffect(() => {
        setFilteredTrips(viaggi.filter(trip => trip.nome.toLowerCase().includes(search.toLowerCase())))
    }, [search])

    return (
        <section className='container '>
            <div className='bg-dark p-2 d-flex flex-column gap-2 rounded-4 table p-3 mb-0'>

                {/* search bar */}
                <SearchBar setSearch={setSearch} search={search} placeholder={'Cerca il viaggio'} />

                {/* card per i viaggi */}
                <CardTour filteredTrips={filteredTrips} />

            </div>
        </section>
    )
}