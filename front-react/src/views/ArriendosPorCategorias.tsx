import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import type { ArriendoResumenSchema } from '../types/arriendo';
import { getArriendosPorCategoria } from '../services/ArriendoService';
import '../css/Categorias.css';

const categoriasFijas = ['Sedan', 'SUV', 'Camioneta'];

export async function loader() {
    const resumen = await getArriendosPorCategoria(); // resumen = array directo
    console.log('Resumen desde loader:', resumen); // Este sí lo verás en consola
    return resumen;
}

export default function ArriendosPorCategorias() {
    const resumen = useLoaderData() as ArriendoResumenSchema[];
    console.log('Resumen cargado:', resumen);
    // Crear un objeto para acceso rápido a cantidad por categoría
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

            <div className="row">
                <div className="col-8">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-white">
                            <li className="breadcrumb-item">
                                <Link to="/">Inicio</Link>
                            </li>
                            <li
                                className="breadcrumb-item active text-white"
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
                            <th className="text-center">Tipo de vehículo</th>
                            <th className="text-center">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoriasFijas.map(categoria => (
                            <tr key={categoria}>
                                <td className="text-center">{categoria}</td>
                                <td className="text-center">
                                    {cantidadesMap[categoria] ?? 0}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
