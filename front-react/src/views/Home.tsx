import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="text-center py-5 bg-light">
            <div className="container">
                <h1 className="display-4 mb-4">
                    Sistema de Arriendos Vehiculares
                </h1>
                <p className="lead mb-4">
                    Administra tus vehículos de manera simple y eficiente.
                </p>
                <img
                    src="https://img.freepik.com/free-vector/urban-road-scene-with-cars_1308-34823.jpg"
                    className="img-fluid mb-4 rounded shadow"
                    alt="Portada vehículos"
                    style={{ maxHeight: '300px' }}
                />
                <div className="d-flex justify-content-center gap-3">
                    <Link
                        to="/nuevoarriendo"
                        className="btn btn-success btn-lg"
                    >
                        + Nuevo Arriendo
                    </Link>
                    <Link to="/activos" className="btn btn-primary btn-lg">
                        Ver Activos
                    </Link>
                    <Link
                        to="/finalizados"
                        className="btn btn-secondary btn-lg"
                    >
                        Ver Finalizados
                    </Link>
                </div>
            </div>
        </div>
    );
}
