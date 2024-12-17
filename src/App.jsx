
import './App.css'


function App() {


  return (
    <>
      {/* HEADER */}
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

      {/* MAIN */}
      <main className='container-lg mt-3 '>
        <div className='bg-dark p-2 d-flex flex-column gap-2 rounded-4 table p-3'>

          {/* search bar */}
          <div className="searchBar">
            <form className="d-flex mb-3" role="search">
              <input
                className="form-control rounded-4"
                type="search"
                placeholder="Cerca Il Viaggio"
                aria-label="Search"
              />
            </form>
          </div>

          {/* card per i viaggi */}


        </div>
      </main>

      {/* FOOTER */}
      <footer>
        FOOTER
      </footer>
    </>
  )
}

export default App
