import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header>
            <div className='bg-dark text-white d-flex gap-3 p-2 justify-content-around'>
                <div>
                    <i className="bi bi-layout-sidebar"></i>
                </div>
                <NavLink className="nav-link" aria-disabled="false" to="/">Home</NavLink>
            </div>
        </header>
    )
}