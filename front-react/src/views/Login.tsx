import {
    Form,
    useActionData,
    type ActionFunctionArgs,
    redirect,
} from 'react-router-dom';
import { login } from '../services/UsuarioService';
import '../css/Login.css';

export async function action({ request }: ActionFunctionArgs) {
    const formData = Object.fromEntries(await request.formData());
    const resultado = await login(formData);

    if (!resultado.success) {
        return resultado;
    }

    return redirect('/');
}

export default function Login() {
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
                        Iniciar Sesión
                    </h2>

                    <Form method="POST">
                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                className="form-label text-white"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                required
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
                                Iniciar Sesión
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
