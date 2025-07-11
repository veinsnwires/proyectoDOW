import { useLoaderData } from 'react-router-dom';
import { getArriendosActivos } from '../services/ArriendoService';
import type { ArriendoSchema } from '../types/arriendo';
import ArriendoFila from '../components/ArriendoFila';
import '../css/Activos.css';

export async function loader() {
    const activos = await getArriendosActivos();
    return activos;
}

export default function ArriendosActivos() {
    const activos = useLoaderData() as ArriendoSchema[];
    console.log(activos);
    return (
        <div className="activos-bg container-fluid">
            <h2 className="text-white p-2 rounded">Arriendos Activos</h2>
            <div className="row">
                <div className="col-8">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-white">
                            <li className="breadcrumb-item">
                                <a href="#" className="text-white">
                                    Inicio
                                </a>
                            </li>
                            <li
                                className="breadcrumb-item text-white active"
                                aria-current="page"
                            >
                                Activos
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
                            <th className="text-center">Ingresar devolución</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activos.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="text-center">
                                    No hay arriendos activos
                                </td>
                            </tr>
                        ) : (
                            activos.map((arriendo, index) => (
                                <ArriendoFila
                                    key={arriendo.id}
                                    index={index}
                                    arriendo={arriendo}
                                    modo={'finalizar'}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
