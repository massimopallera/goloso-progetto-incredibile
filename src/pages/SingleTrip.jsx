import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import visitatori from "../database/visitatori"
import SinglePartecipant from "./SinglePartecipant"

const initial = {
    nome: '',
    cognome: '',
    email: '',
    numeroTelefono: ''
}

export default function SingleTrip() {
    const { id } = useParams()
    const [client, setClient] = useState(initial)
    const [search, setSearch] = useState('')

    // filtred client
    const filteredClient = visitatori.filter(element => element.codiceViaggio.toLowerCase() === id.toLowerCase());
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

    return (
        <>
            <div className="d-flex justify-content-center mt-5 mb-5">
                <NavLink to='/'>
                    <button className="btn btn-primary">Torna ai Viaggi</button>
                </NavLink>

                {/* search bar */}
                <div className="searchBar">
                    <form className="d-flex mb-3" role="search">
                        <input
                            className="form-control rounded-4"
                            type="search"
                            placeholder="Cerca partecipante"
                            aria-label="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </div>
            </div>

            {/* overlay */}
            <div id='overlay' className="d-none">
                <SinglePartecipant client={client} closeOverlay={closeOverlay} />
            </div>

            {/* clients */}
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 justify-content-center gap-3">

                    {filteredPartecipant.map(visitatore => (
                        <div className="col" key={visitatore.id}>
                            <div className="card">
                                <div
                                    className="card-body d-flex align-items-center justify-content-between"
                                    style={{ height: '75px', verticalAlign: 'middle' }}
                                >
                                    <div>
                                        <h5 className="card-title">{visitatore.nome} {visitatore.cognome}</h5>
                                    </div>
                                    <div>

                                        <button
                                            onClick={() => (handleOverlay(visitatore.id))}
                                            className="btn btn-outline-secondary btn-sm rounded-3 mb-3"
                                        > Altre info</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}