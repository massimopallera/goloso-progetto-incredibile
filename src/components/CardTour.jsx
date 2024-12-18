import { Link } from "react-router-dom"

export default function CardTour({ filteredTrips }) {

    return (
        <div className="container table d-flex flex-column gap-3 ">

            {filteredTrips.map((viaggio) =>
                <div key={viaggio.id} className="card text-left ">
                    <div className="card-body rounded-4 ">
                        <h5 className="card-title">{viaggio.nome}</h5>

                        <div className="start">
                            <span className="text-muted">Departure:</span> <span>{viaggio.dataPartenza}</span>
                        </div>

                        <div className="end mb-2">
                            <span className="text-muted">Return:</span> <span>{viaggio.dataRitorno}</span>
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


