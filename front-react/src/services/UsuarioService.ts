import { safeParse } from 'valibot';
import { LoginFormSchema, SignupFormSchema } from '../types/usuario';
import axios from '../services/axiosInstance';

type UsuarioFormData = {
    [k: string]: FormDataEntryValue;
};
export async function login(formData: UsuarioFormData) {
    try {
        const resultado = safeParse(LoginFormSchema, formData);
        if (resultado.success) {
            const url = `/usuarios/login`;
            const { data } = await axios.post(url, resultado.output);
            localStorage.setItem('token', data.token);
            return { success: true };
        } else {
            const detalleErrores: Record<string, string[]> = {};

            for (const issue of resultado.issues) {
                const campo = issue.path![0].key as string;
                if (!detalleErrores[campo]) {
                    detalleErrores[campo] = [];
                }
                detalleErrores[campo].push(issue.message);
            }

            return {
                success: false,
                error: 'Datos de formulario no válidos',
                detalleErrores: detalleErrores,
            };
        }
    } catch (error: any) {
        return {
            success: false,
            error: error.response?.data?.error ?? 'Error inesperado',
        };
    }
}

export async function signup(formData: UsuarioFormData) {
    try {
        const resultado = safeParse(SignupFormSchema, formData);

        if (resultado.success) {
            const url = `/usuarios/signup`;
            await axios.post(url, resultado.output);
            return { success: true };
        } else {
            const detalleErrores: Record<string, string[]> = {};

            for (const issue of resultado.issues) {
                const campo = issue.path![0].key as string;
                if (!detalleErrores[campo]) {
                    detalleErrores[campo] = [];
                }
                detalleErrores[campo].push(issue.message);
            }

            return {
                success: false,
                error: 'Datos de formulario no válidos',
                detalleErrores: detalleErrores,
            };
        }
    } catch (error: any) {
        return {
            success: false,
            error: error.response?.data?.error ?? 'Error inesperado',
        };
    }
}
