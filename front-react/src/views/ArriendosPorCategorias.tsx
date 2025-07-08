import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import type { ArriendoResumenSchema } from '../types/arriendo';
import { getArriendosPorCategoria } from '../services/ArriendoService';
import '../css/Categorias.css';
import '../css/Tablas.css';
const categoriasFijas = ['Sedan', 'SUV', 'Camioneta'];

export async function loader() {
    const resumen = await getArriendosPorCategoria();
    return resumen;
}

export default function ArriendosPorCategorias() {
    const resumen = useLoaderData() as ArriendoResumenSchema[];
    console.log('Resumen cargado:', resumen);
    // PARA OBTENER CANTIDAD POR CATEGORÍA
    const cantidadesMap =
        resumen?.reduce<Record<string, number>>((acc, item) => {
            acc[item.tipoVehiculo] = item.cantidadArriendos;
            return acc;
        }, {}) || {};

    return (
        <div className="categorias-bg container-fluid">
            <h2 className="text-white p-2 rounded">
                Resumen arriendos por Categoría
            </h2>

            <div className="table-responsive">
                <table
                    className="table table-bordered table-striped"
                    style={{ borderColor: '#8b5e3c' }}
                >
                    <thead
                        style={{ backgroundColor: '#5c4033', color: 'white' }}
                    >
                        <tr>
                            <th
                                style={{
                                    backgroundColor: '#5c4033',
                                    color: 'white',
                                }}
                                className="text-center"
                            >
                                Tipo de vehículo
                            </th>
                            <th
                                style={{
                                    backgroundColor: '#5c4033',
                                    color: 'white',
                                }}
                                className="text-center"
                            >
                                Cantidad
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoriasFijas.map((categoria, i) => (
                            <tr
                                key={categoria}
                                style={{
                                    backgroundColor:
                                        i % 2 === 0 ? '#f3e5ab' : '#ede0c8',
                                    borderColor: '#8b5e3c',
                                }}
                            >
                                <td className="text-center">{categoria}</td>
                                <td className="text-center">
                                    {cantidadesMap[categoria] ?? 0}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="d-flex justify-content-center mt-4">
                    <Link
                        to="/nuevoarriendo"
                        className="btn btn-lg btn-bg-nuevo"
                    >
                        Nuevo arriendo
                    </Link>
                </div>
            </div>
        </div>
    );
}
