import type { ArriendoSchema } from '../types/arriendo';
import {
    finalizarArriendo,
    eliminarArriendo,
} from '../services/ArriendoService';

type ArriendoFilaProps = {
    index: number;
    arriendo: ArriendoSchema;
    modo: 'finalizar' | 'eliminar'; //Para las vistas Activos y Finalizados
};

export default function ArriendoFila({
    index,
    arriendo,
    modo,
}: ArriendoFilaProps) {
    const handleClick = async () => {
        if (modo === 'finalizar') {
            const confirmar = confirm(
                `¿Finalizar el arriendo ID ${arriendo.id}?`
            );
            if (confirmar) {
                const resultado = await finalizarArriendo(arriendo.id);
                if (resultado.success) {
                    alert('Arriendo finalizado correctamente');
                    location.reload(); // recargar la página para reflejar cambios
                } else {
                    alert('Error al finalizar el arriendo');
                }
            }
        } else if (modo === 'eliminar') {
            const confirmar = confirm(
                `¿Eliminar el arriendo ID ${arriendo.id}?`
            );
            if (confirmar) {
                const resultado = await eliminarArriendo(arriendo.id);
                if (resultado.success) {
                    alert('Arriendo eliminado correctamente');
                    location.reload();
                } else {
                    alert('Error al eliminar el arriendo');
                }
            }
        }
    };

    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td className="text-center">{arriendo.fechaInicio}</td>
            <td className="text-center">{arriendo.fechaFin || '---'}</td>
            <td className="text-center">{arriendo.patenteVehiculo}</td>
            <td className="text-center">{arriendo.tipoVehiculo}</td>
            <td className="text-center">{arriendo.rutCliente}</td>
            <td className="text-center">{arriendo.nombreCliente}</td>
            <td className="text-center">
                <button
                    className={`btn btn-sm ${
                        modo === 'finalizar' ? 'btn-success' : 'btn-danger'
                    }`}
                    onClick={handleClick}
                >
                    <i
                        className={`bi ${
                            modo === 'finalizar'
                                ? 'bi-calendar-check'
                                : 'bi-trash'
                        }`}
                    ></i>
                </button>
            </td>
        </tr>
    );
}
