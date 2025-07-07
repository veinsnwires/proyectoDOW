import axios from 'axios';
import { safeParse } from 'valibot';
import { ArriendosSchema } from '../types/arriendo';

export async function getArriendosActivos() {
    try {
        const url = 'http://localhost:3000/api/arriendos/activos';
        const { data: arriendos } = await axios.get(url);
        console.log('Datos recibidos del backend:', arriendos);
        const resultado = safeParse(ArriendosSchema, arriendos.data);
        if (resultado.success) {
            return resultado.output;
        } else {
            throw new Error('Error al pedir datos');
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}
