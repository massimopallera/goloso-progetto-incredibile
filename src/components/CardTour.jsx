import viaggi from "../database/viaggi"

export default function CardTour() {
    return (
        <div className="container table d-flex flex-column gap-2 ">
            {viaggi.map((viaggio) =>
                <div key={viaggio.id} className="card-lg text-left ">
                    <div className="card-body rounded-4 ">
                        <div><strong>{viaggio.nome}</strong></div>
                        <div>{viaggio.dataPartenza}</div>
                        <div>{viaggio.dataRitorno}</div>
                        <button
                            className='btn btn-primary btn-sm bg-primary rounded-4 text-white'>
                            <strong>Show Travel</strong>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}


