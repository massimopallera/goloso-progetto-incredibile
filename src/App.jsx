import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import HomePage from './pages/HomePage'
// import SinglePartecipant from "./pages/SinglePartecipant"
import SingleTrip from "./pages/SingleTrip"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path='/trips/:id' element={<SingleTrip />}></Route>
            {/* <Route path='/clients/:id' element={<SinglePartecipant />}></Route> */}
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
