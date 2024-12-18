import { Link } from "react-router-dom"

export default function CardTour({ filteredTrips }) {

    return (
        <div className="container table d-flex flex-column gap-3 ">

            {filteredTrips.map((viaggio) =>
                <div key={viaggio.id} className="card text-left ">
                    <div className="card-body d-flex justify-content-between rounded-4">
                        <div className="details">
                            <h5 className="card-title mb-2">{viaggio.nome}</h5>

                            <div className="start">
                                <span className="text-muted">Departure:</span> <span>{viaggio.dataPartenza}</span>
                            </div>

                            <div className="end">
                                <span className="text-muted">Return:</span> <span>{viaggio.dataRitorno}</span>
                            </div>
                        </div>


                        <Link to={`/trips/${viaggio.id}`}>
                            <button
                                className='btn btn-outline-secondary btn-sm rounded-3'>
                                Trip details
                            </button>
                        </Link>
                    </div>
                </div>
            )}

        </div>
    )
}


