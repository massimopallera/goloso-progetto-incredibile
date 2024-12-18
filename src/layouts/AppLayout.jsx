import { Outlet } from "react-router-dom"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

export default function AppLayout() {
    return (
        <>
            <AppHeader />

            <main className="main bg-dark">
                <Outlet />
            </main>

            <AppFooter />
        </>
    )
}