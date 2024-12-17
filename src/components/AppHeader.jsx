import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header className="bg-dark">

            <div className=' container text-white d-flex gap-3 p-2 align-items-center '>
                <h1>BoolTrips</h1>
                <NavLink
                    className="nav-link p-3"
                    aria-disabled="false"
                    to="/">
                    Home
                </NavLink>
            </div>
        </header>
    )
}