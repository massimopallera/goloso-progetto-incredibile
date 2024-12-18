import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import visitatori from "../database/visitatori"
import SinglePartecipant from "./SinglePartecipant"
import SearchBar from "../components/SearchBar"
import ClientsCard from "../components/ClientsCard"

const initial = {
    nome: '',
    cognome: '',
    email: '',
    numeroTelefono: ''
}

export default function SingleTrip() {

    // logic
    const { id } = useParams()
    const [client, setClient] = useState(initial)

    // filtred client
    const filteredClient = visitatori.filter(element => element.codiceViaggio.toLowerCase() === id.toLowerCase());
    const [search, setSearch] = useState('')
    const [filteredPartecipant, setFilteredPartecipant] = useState(filteredClient)

    useEffect(() => {
        setFilteredPartecipant(filteredClient.filter(visitatore => visitatore.nome.toLowerCase().includes(search.toLowerCase()) || visitatore.cognome.toLowerCase().includes(search.toLowerCase())))
    }, [search])

    function handleOverlay(id) {
        const overlayEl = document.querySelector('#overlay')
        overlayEl.classList.remove('d-none')
        overlayEl.classList.add('d-block')

        const findClient = visitatori.find(element => element.id.toLowerCase() === id.toLowerCase())

        setClient(findClient)
    }

    function closeOverlay() {
        const overlayEl = document.querySelector('#overlay')
        overlayEl.classList.add('d-none')
    }

    // render
    return (
        <div className="bg-dark">

            <div className="bg-dark p-2 d-flex flex-column gap-2 rounded-4 table p-3 mb-0 ">
                {/* search bar */}
                <SearchBar setSearch={setSearch} search={search} placeholder={'Search name...'} />
            </div>

            {/* overlay */}
            <div id='overlay' className="d-none">
                <SinglePartecipant client={client} closeOverlay={closeOverlay} />
            </div>

            {/* clients */}
            <ClientsCard filteredPartecipant={filteredPartecipant} handleOverlay={handleOverlay} />

            {/* back to home */}
            <div className="container d-flex justify-content-center">
                <NavLink to='/'>
                    <button
                        className="btn btn-secondary btn-sm mb-4"
                        style={{ fontSize: '12px', padding: "7px" }}
                    >Back to trips</button>
                </NavLink>
            </div>

        </div >
    )
}