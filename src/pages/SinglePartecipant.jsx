// import { useParams } from 'react-router-dom'
import visitatori from '../database/visitatori.js'

// Dare parametri alle rotte --> in questo caso nella rotta dovra` esserci l'id del partecipante
// import { useParams } from 'react-router-dom'


export default function SinglePartecipant({ client, closeOverlay }) {

    return (
        <div className="singleClient cardOverlay card"
            style=
            {{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
            }}>
            <h3 className="card-title"> <strong>{client.nome} </strong> <strong>{client.cognome}</strong></h3>

            <div className="email mb-1">
                <span className="text-muted">Email:</span> <span className='pointer'>{client.email}</span>
            </div>

            <div className="phone mb-2">
                <span className='text-muted'>phone:</span> <span className='pointer'>{client.numeroTelefono}</span>
            </div>

            <button onClick={closeOverlay} className="btn btn-sm btn-outline-secondary ">Back</button>
        </div>
    )
}