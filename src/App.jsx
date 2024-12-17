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

    </>
  )
}

export default App
