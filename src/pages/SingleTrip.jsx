import visitatori from "../database/visitatori"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function SingleTrip() {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <>
            <div className="d-flex justify-content-center mt-5 mb-5">
                <NavLink to='/' button className="btn btn-primary">Torna ai Viaggi</NavLink>
            </div>

            <div className="container ">
                <div className="row row-cols-4 flex-wrap  gap-3 justify-content-center">
                    {visitatori.map(visitatore => (
                        <div className="card col g-2" key={visitatore.id}>
                            <h4 className="text-center">{visitatore.nome} {visitatore.cognome}</h4>
                            <div className="d-flex justify-content-center">
                                <button onClick={() => (navigate(visitatori.id))} className="btn btn-primary btn-sm mb-3"> Altre info</button>
                            </div>
                        </div>


                    ))}

                </div>
            </div>

        </>

    )
}