import { email, nonEmpty, object, pipe, string } from 'valibot';

export const LoginFormSchema = object({
    email: pipe(
        string(),
        nonEmpty('Por favor ingresa un email'),
        email('Correo no válido')
    ),
    password: pipe(string(), nonEmpty('Por favor ingresa un email')),
});
