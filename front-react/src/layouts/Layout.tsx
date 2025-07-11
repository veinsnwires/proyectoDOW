import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
export default function Layout() {
    return (
        <>
            {/* NAVBAR */}
            <NavBar />
            {/* CONTENIDO PRINCIPAL DE LA PAGINA  */}
            <main className="container-fluid px-0">
                <Outlet />
            </main>
        </>
    );
}
