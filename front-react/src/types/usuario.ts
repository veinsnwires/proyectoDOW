import { email, nonEmpty, object, pipe, string, minLength } from 'valibot';

export const LoginFormSchema = object({
    email: pipe(
        string(),
        nonEmpty('Por favor ingresa un email'),
        email('Correo no válido')
    ),
    password: pipe(string(), nonEmpty('Por favor ingresa una contraseña')),
});

export const SignupFormSchema = object({
    email: pipe(
        string(),
        nonEmpty('Por favor ingresa un email'),
        email('Correo no válido')
    ),
    password: pipe(
        string(),
        nonEmpty('Por favor ingresa una contraseña'),
        minLength(6, 'La contraseña debe tener al menos 6 caracteres')
    ),
});
