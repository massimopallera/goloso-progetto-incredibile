import visitatori from "../database/visitatori"
// import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import SinglePartecipant from "./SinglePartecipant"
import { useState } from "react"

const initial = {
    nome: '',
    cognome: '',
    email: '',
    numeroTelefono: ''
}

export default function SingleTrip() {
    const { id } = useParams()
    // const navigate = useNavigate()


    const [client, setClient] = useState(initial)

    // filtri i clienti per codice viaggio
    const filtredClients = visitatori.filter(element => element.codiceViaggio.toLowerCase() === id.toLowerCase())
    // console.log(filtredClients);


    function handleOverlay(id) {
        const overlayEl = document.querySelector('#overlay')
        overlayEl.classList.remove('d-none')
        overlayEl.classList.add('d-block')

        const findClient = visitatori.find(element => element.id.toLowerCase() === id.toLowerCase())

        setClient(findClient)

    }

    return (
        <>
            <div className="d-flex justify-content-center mt-5 mb-5">
                <NavLink to='/' className="btn btn-primary">Torna ai Viaggi</NavLink>
            </div>

            <div className="">

                <div id='overlay' style={{ background: '#000', position: 'relative', zIndex: '9999', height: '100vh', width: '100vw' }} className="d-none">
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                        <h2>{client.nome} {client.cognome}</h2>
                        <h3>Email: {client.email}</h3>
                        <h3>N° Telefono: {client.numeroTelefono}</h3>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-4 flex-wrap  gap-3 justify-content-center">
                    {filtredClients.map(visitatore => (
                        <div className="card col g-2" key={visitatore.id}>
                            <h4 className="text-center">{visitatore.nome} {visitatore.cognome}</h4>
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