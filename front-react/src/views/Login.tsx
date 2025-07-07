import { useState } from 'react';
import axios from 'axios';
import type { FormEvent } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                'http://localhost:3000/api/auth/login',
                {
                    email,
                    password,
                }
            );

            setMensaje(data.mensaje);
            //  Aquí podrías guardar el token en localStorage si es necesario
        } catch (error: any) {
            setMensaje(
                error.response?.data?.error || 'Error al iniciar sesión'
            );
        }
    };

    return (
        <div className="container mt-4">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group mb-2">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Ingresar
                </button>
            </form>
            {mensaje && <div className="mt-3 alert alert-info">{mensaje}</div>}
        </div>
    );
}
