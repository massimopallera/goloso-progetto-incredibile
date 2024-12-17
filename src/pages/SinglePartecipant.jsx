// import { useParams } from 'react-router-dom'
import visitatori from '../database/visitatori.js'

// Dare parametri alle rotte --> in questo caso nella rotta dovra` esserci l'id del partecipante
// import { useParams } from 'react-router-dom'


export default function SinglePartecipant({id}) {

    // 📌 prendere id del partecipante
    // const {id} = useParams()


    //confronta id nei parametri con id partecipanti
    function getPartecipant(partecipant_id){
        const tripClient = visitatori.find(element => element.id.toLowerCase() === partecipant_id.toLowerCase());
        return tripClient
    }


    console.log(getPartecipant(id));

    const {nome, cognome, email, numeroTelefonico} = getPartecipant(id)
    

    // OffCanvas ?

    return (
            <div style={{position: 'absolute', top:'50%', left:'50%'}}>
                <h2>{nome} {cognome}</h2>
                <h3>Email: {email}</h3>
                <h3>N° Telefono: {numeroTelefonico}</h3>
            </div>
    )
}