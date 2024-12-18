export default function ClientsCard({ filteredPartecipant, handleOverlay }) {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 gap-3 justify-content-center m-3">

                {filteredPartecipant.map(visitatore => (
                    <div className="col" key={visitatore.id}>
                        <div className="card">
                            <div
                                className="card-body d-flex justify-content-between align-items-center"
                                style={{ minHeight: '75px' }}
                            >
                                <div>
                                    <h5 className="card-title mb-0">{visitatore.nome} {visitatore.cognome}</h5>
                                </div>
                                <div>
                                    <button
                                        onClick={() => handleOverlay(visitatore.id)}
                                        className="btn btn-outline-secondary btn-sm rounded-3"
                                    >
                                        More info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>

    )
}