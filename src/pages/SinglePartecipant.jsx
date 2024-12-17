import { useParams } from 'react-router-dom'
import visitatori from '../database/visitatori.js'

// Dare parametri alle rotte --> in questo caso nella rotta dovra` esserci l'id del partecipante
// import { useParams } from 'react-router-dom'


export default function SinglePartecipant() {

    // 📌 prendere id del partecipante
    // const {id} = useParams()


    //confrontare id del partecipante all'interno di visitatore
    function getPartecipant(id){
        const tripClient = visitatori.find(element => element.id === id);
        return tripClient
    }


    console.log(getPartecipant("V001_1"));
    

    return (
        <>

        </>
    )
}