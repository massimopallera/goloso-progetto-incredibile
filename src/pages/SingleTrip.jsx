import visitatori from "../database/visitatori"
// import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import SinglePartecipant from "./SinglePartecipant"
import { useState, useEffect } from "react"
import { Button } from "bootstrap"
import SearchBar from "../components/SearchBar"

const initial = {
    nome: '',
    cognome: '',
    email: '',
    numeroTelefono: ''
}

export default function SingleTrip() {
    const { id } = useParams()
    const [client, setClient] = useState(initial)

    const filteredClient = visitatori.filter(element => element.codiceViaggio.toLowerCase() === id.toLowerCase());
    const [search, setSearch] = useState('')
    const [filteredPartecipant, setFilteredPartecipant] = useState(filteredClient)

    useEffect(() => {
        setFilteredPartecipant(filteredClient.filter(visitatore => visitatore.nome.toLowerCase().includes(search.toLowerCase()) || visitatore.cognome.toLowerCase().includes(search.toLowerCase())))
    }, [search])

    // const navigate = useNavigate()

    // filtred client

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
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 gap-3 justify-content-center m-3">

                    {filteredPartecipant.map(visitatore => (
                        <div className="col" key={visitatore.id}>
                            <div className="card">
                                <div
                                    className="card-body d-flex justify-content-between align-items-center"
                                    style={{ minHeight: '75px' }}
                                >
                                    <div>
                                        <h5 className="card-title mb-0">{visitatore.nome} {visitatore.cognome}</h5>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => handleOverlay(visitatore.id)}
                                            className="btn btn-outline-secondary btn-sm rounded-3"
                                        >
                                            More info
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </div>

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