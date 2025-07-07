import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Sistema Vehículos
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/arriendosporcategoria"
                            >
                                Arriendos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/activos">
                                Activos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/finalizados">
                                Finalizados
                            </Link>
                        </li>
                        {/* Aquí puedes agregar más rutas según tus vistas */}
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link btn btn-outline-primary me-2"
                                to="/login"
                            >
                                Iniciar sesión
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
