import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header className="bg-dark">

            <div className='container text-white d-flex gap-3 p-2 align-items-center '>
                <NavLink
                    className="nav-link"
                    to="/"
                ><h1>BoolTrips</h1></NavLink>
            </div>
        </header>
    )
}