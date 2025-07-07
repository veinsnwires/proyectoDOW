import { Link } from 'react-router-dom';

export default function ArriendosPorCategorias() {
    return (
        <div className="container-fluid">
            <h2>Vista general de arriendos</h2>
            <div className="row">
                <div className="col-8">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">Inicio</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Arriendos
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="col-4 text-end">
                    <Link to="/nuevoarriendo" className="btn btn-primary">
                        Nuevo arriendo
                    </Link>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Tipo de vehículo</th>
                            <th>Cantidad Productos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sedan</td>
                            <td className="text-end">5</td>
                        </tr>
                        <tr>
                            <td>SUV</td>
                            <td className="text-end">5</td>
                        </tr>
                        <tr>
                            <td>Camioneta</td>
                            <td className="text-end">5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
