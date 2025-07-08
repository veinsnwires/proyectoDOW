import {
    Form,
    useActionData,
    type ActionFunctionArgs,
    redirect,
} from 'react-router-dom';
import { signup } from '../services/UsuarioService';
import '../css/Login.css'; // reutilizamos el mismo CSS para mantener estilo igual

export async function action({ request }: ActionFunctionArgs) {
    const formData = Object.fromEntries(await request.formData());
    const resultado = await signup(formData);

    if (!resultado.success) {
        return resultado;
    }

    // Después de signup exitoso, podrías redirigir a login o directo al home
    return redirect('/login');
}

export default function Signup() {
    const actionData = useActionData() as {
        success?: boolean;
        error?: string;
        detalleErrores?: { [key: string]: string[] };
    };

    return (
        <div className="login-bg d-flex align-items-center justify-content-center vh-100">
            <div
                className="card p-4 shadow-lg"
                style={{
                    maxWidth: '500px',
                    width: '90%',
                    backgroundColor: 'rgba(65, 134, 65, 0.84)',
                    borderRadius: '1rem',
                }}
            >
                <div className="card-body">
                    <h2 className="text-center text-white mb-4">
                        Crear cuenta
                    </h2>

                    <Form method="POST">
                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                className="form-label text-white"
                            >
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                            />
                            {actionData?.detalleErrores?.email && (
                                <div className="text-danger small mt-1">
                                    {actionData.detalleErrores.email.join(', ')}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="password"
                                className="form-label text-white"
                            >
                                Contraseña
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                required
                                minLength={4}
                            />
                            {actionData?.detalleErrores?.password && (
                                <div className="text-danger small mt-1">
                                    {actionData.detalleErrores.password.join(
                                        ', '
                                    )}
                                </div>
                            )}
                        </div>
                        {actionData?.error && (
                            <div className="alert alert-danger mt-3">
                                {actionData.error}
                            </div>
                        )}
                        <div className="text-end">
                            <button type="submit" className="btn btn-bg-m">
                                Registrarse
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
