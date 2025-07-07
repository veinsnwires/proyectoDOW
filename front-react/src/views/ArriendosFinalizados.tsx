export default function ArriendosFinalizados() {
    return (
        <div className="container-fluid">
            <h2>Arriendos Finalizados</h2>
            <div className="row">
                <div className="col-8">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">Inicio</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Finalizados
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th className="text-center">id</th>
                            <th className="text-center">Fecha inicio</th>
                            <th className="text-center">Fecha término</th>
                            <th className="text-center">Patente</th>
                            <th className="text-center">Tipo Vehículo</th>
                            <th className="text-center">Rut cliente</th>
                            <th className="text-center">Nombre cliente</th>
                            <th className="text-center">Eliminar registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td className="text-center">24-06-25</td>
                            <td className="text-center">28-06-25</td>
                            <td className="text-center">DGBZ32</td>
                            <td className="text-center">SUV</td>
                            <td className="text-center">16365063-0</td>
                            <td className="text-center">Jorge Gonzalez</td>
                            <td className="text-center">
                                <button className="btn btn-sm btn-danger me-1">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
