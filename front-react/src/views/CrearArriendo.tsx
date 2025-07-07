import { Link } from 'react-router-dom';

export default function CrearArriendo() {
    return (
        <div className="container-fluid">
            <h2>Ingreso Arriendo</h2>
            <div className="row">
                <div className="col-8">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">Inicio</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="/arriendosporcategoria">Arriendos</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Nuevo Ingreso
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="col-4 text-end">
                    <Link
                        to="/arriendosporcategoria"
                        className="btn btn-primary"
                    >
                        Volver a arriendos
                    </Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label
                                className="form-label"
                                htmlFor="patenteVehiculo"
                            >
                                Patente vehículo
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="patenteVehiculo"
                                name="patenteVehiculo"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                className="form-label"
                                htmlFor="nombreCliente"
                            >
                                Nombre cliente
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombreCliente"
                                name="nombreCliente"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="rutCliente">
                                Rut del cliente
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="rutCliente"
                                name="rutCliente"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                className="form-label"
                                htmlFor="tipoVehiculo"
                            >
                                Categoría
                            </label>
                            <select
                                className="form-select"
                                id="tipoVehiculo"
                                name="tipoVehiculo"
                            >
                                <option selected>
                                    Ingresar tipo de vehículo
                                </option>
                                <option value="1">Sedan</option>
                                <option value="2">SUV</option>
                                <option value="3">Camioneta</option>
                            </select>
                        </div>
                        <div className="mb-3 text-end">
                            <button
                                type="reset"
                                className="btn btn-warning me-1"
                            >
                                Restablecer
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Generar Arriendo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
