import { Link } from "react-router-dom"
import viaggi from "../database/viaggi"



export default function CardTour() {



    return (
        <div className="container table d-flex flex-column gap-2 ">
            {viaggi.map((viaggio) =>
                <div key={viaggio.id} className="card-lg text-left ">
                    <div className="card-body rounded-4 ">
                        <div><strong>{viaggio.nome}</strong></div>
                        <div> <strong>Partenza :</strong> {viaggio.dataPartenza}</div>
                        <div> <strong>Ritorno :</strong> {viaggio.dataRitorno}</div>
                        <Link to={`/trips/${viaggio.id}`}>
                            <button
                                className='btn btn-primary btn-sm bg-primary rounded-4 text-white'>
                                Show Trips
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}


