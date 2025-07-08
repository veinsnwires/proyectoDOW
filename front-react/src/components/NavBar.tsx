import { Link, useNavigate } from 'react-router-dom';
import '../css/NavBar.css';

export default function NavBar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-bg-img">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img
                        src="/img/logoUSM.png"
                        alt="Logo Universidad"
                        style={{
                            width: '140px',
                            height: '100px',
                            marginRight: '40px',
                        }}
                    />
                    <span style={{ lineHeight: '100px' }}>Home</span>
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
                    </ul>
                    <div className="d-flex ms-auto">
                        <img
                            src="../img/logouttext.png"
                            alt="Texto logout"
                            style={{
                                width: 160,
                                height: 60,
                                marginRight: 8,
                            }}
                        />
                        <button
                            className="boton-icono"
                            onClick={handleLogout}
                            aria-label="Cerrar sesión"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
