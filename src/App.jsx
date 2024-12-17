import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import HomePage from './pages/HomePage'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout />}>
            <Route index element={<HomePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

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


    </div >
      </main >

    {/* FOOTER */ }
    < footer >
    FOOTER
      </footer >
    </>
  )
}

export default App
