import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import visitatori from "../database/visitatori"
import SinglePartecipant from "./SinglePartecipant"
import { useState } from "react"
import { Button } from "bootstrap"

const initial = {
    nome: '',
    cognome: '',
    email: '',
    numeroTelefono: ''
}

export default function SingleTrip() {
    const { id } = useParams()
    const [client, setClient] = useState(initial)

    // const navigate = useNavigate()

    // filtred client
    const filtredClient = visitatori.filter(element => element.codiceViaggio.toLowerCase() === id.toLowerCase());

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
            <div className="d-flex justify-content-center mt-5 mb-5 flex-column container align-items-center">
                <NavLink to='/'>
                    <button className="btn btn-primary mb-4">Torna ai Viaggi</button>
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

                    {filtredClient.map(visitatore => (
                        <div className="card col g-2 p-3 d-flex align-middle justify-content-between bg-secondary text-white" key={visitatore.id}>
                            <h4 className="text-center ">{visitatore.nome} {visitatore.cognome}</h4>
                            <div className="d-flex justify-content-center">
                                <button onClick={() => (handleOverlay(visitatore.id))} className="btn btn-primary btn-sm mb-3"> Altre info</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}