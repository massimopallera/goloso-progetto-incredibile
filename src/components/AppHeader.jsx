import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header className="bg-dark">
            <div className='text-white d-flex gap-3 p-2'>
                {/* <div>
                    <i className="bi bi-layout-sidebar"></i>
                </div> */}
                <NavLink className="nav-link p-1" aria-disabled="false" to="/">Home</NavLink>
            </div>
        </header>
    )
}