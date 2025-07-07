import { Link } from 'react-router-dom';
import '../css/Home.css';

export default function Home() {
    return (
        <div className="home-background min-vh-100 d-flex align-items-center justify-content-center">
            <div
                className="card p-4 shadow-lg"
                style={{
                    maxWidth: '1000px',
                    width: '90%',
                    backgroundImage: "url('/img/texture.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                }}
            >
                <h1
                    style={{
                        fontSize: '3.5rem',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: '700',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    }}
                >
                    Sistema de Arriendo de Vehículos
                </h1>
                <p
                    className="lead mb-4 text-center"
                    style={{
                        fontWeight: '600',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
                    }}
                >
                    Administra tus vehículos de manera simple y eficiente.
                </p>
                {/* <img
                    src="/img/yepee.jpg"
                    className="img-fluid mb-4 rounded shadow-sm"
                    alt="Portada vehículos"
                    style={{
                        maxHeight: '300px',
                        display: 'block',
                        margin: '0 auto',
                    }}
                /> */}
                <div className="d-flex justify-content-center gap-3">
                    <Link
                        to="/nuevoarriendo"
                        className="btn btn-lg btn-bg-nuevo"
                    >
                        Nuevo Arriendo
                    </Link>
                    <Link to="/activos" className="btn btn-lg btn-bg-nuevo">
                        Ver Activos
                    </Link>
                    <Link to="/finalizados" className="btn btn-lg btn-bg-nuevo">
                        Ver Finalizados
                    </Link>
                </div>
            </div>
        </div>
    );
}
