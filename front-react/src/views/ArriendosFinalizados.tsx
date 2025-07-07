import { useLoaderData } from 'react-router-dom';
import { getArriendosFinalizados } from '../services/ArriendoService';
import type { ArriendoSchema } from '../types/arriendo';
import ArriendoFila from '../components/ArriendoFila';
import '../css/Finalizados.css';

export async function loader() {
    console.log('Llamando a getArriendosFinalizados');
    const finalizados = await getArriendosFinalizados();
    console.log('Finalizados en loader:', finalizados);
    return finalizados;
}

export default function ArriendosFinalizados() {
    const finalizados = useLoaderData() as ArriendoSchema[];
    console.log(finalizados);
    return (
        <div className="finalizados-bg container-fluid">
            <h2 className="text-white p-2 rounded">Arriendos Finalizados</h2>
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
                                className="breadcrumb-item active text-white"
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
                        {finalizados.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="text-center">
                                    No hay arriendos finalizados
                                </td>
                            </tr>
                        ) : (
                            finalizados.map((arriendo, index) => (
                                <ArriendoFila
                                    key={arriendo.id}
                                    index={index}
                                    arriendo={arriendo}
                                    modo={'eliminar'}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
