import axios from 'axios';
import { safeParse } from 'valibot';
import { ArriendoFormSchema, ArriendosSchema } from '../types/arriendo';

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

export async function getArriendosFinalizados() {
    try {
        const url = 'http://localhost:3000/api/arriendos/finalizados';
        const { data: arriendos } = await axios.get(url);
        console.log('Datos finalizados desde backend:', arriendos);
        const resultado = safeParse(ArriendosSchema, arriendos.data);
        if (resultado.success) {
            return resultado.output;
        } else {
            throw new Error('Error al pedir datos finalizados');
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}

type ArriendoFormData = {
    [k: string]: FormDataEntryValue;
};

export async function arriendoCrear(formData: ArriendoFormData) {
    try {
        const parsedData = {
            fechaInicio: new Date().toISOString().split('T')[0], // fecha actual en formato YYYY-MM-DD
            patenteVehiculo: formData.patenteVehiculo.toString(),
            tipoVehiculo: formData.tipoVehiculo.toString(),
            rutCliente: formData.rutCliente.toString(),
            nombreCliente: formData.nombreCliente.toString(),
        };

        const resultado = safeParse(ArriendoFormSchema, parsedData);
        console.log('Errores de validación:', resultado.issues);

        if (resultado.success) {
            console.log('API_URL:', import.meta.env.VITE_API_URL);
            const url = `${import.meta.env.VITE_API_URL}/arriendos/nuevo`;

            await axios.post(url, resultado.output); // envías todo lo validado
            return { success: true };
        } else {
            return {
                success: false,
                error: 'Datos inválidos. Revisa los campos del formulario.',
            };
        }
    } catch (error) {
        console.error(error);
        return {
            success: false,
            error: 'Error al crear el arriendo.',
        };
    }
}

export async function finalizarArriendo(id: number) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/arriendos/devolver/${id}`;
        await axios.put(url);
        return { success: true };
    } catch (error) {
        console.error('Error al finalizar el arriendo:', error);
        return { success: false, error: 'No se pudo finalizar el arriendo' };
    }
}

export async function eliminarArriendo(id: number) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/arriendos/eliminar/${id}`;
        await axios.delete(url);
        return { success: true };
    } catch (error) {
        console.error('Error al eliminar arriendo:', error);
        return { success: false };
    }
}
