export default function AppHeader() {
    return (
        <header>
            <div className='bg-dark text-white d-flex gap-3 p-2 justify-content-around'>
                <div>
                    <i className="bi bi-layout-sidebar"></i>
                </div>
                <a className="nav-link" aria-disabled="false" href="#">Home</a>
                <a className="nav-link" aria-disabled="false" href="#">Viaggi</a>
                <a className="nav-link" aria-disabled="false" href="#">Partecipanti</a>
            </div>
        </header>
    )
}