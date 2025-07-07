import {
    array,
    object,
    string,
    number,
    nullable,
    type InferOutput,
} from 'valibot';

export const ArriendoSchema = object({
    id: number(),
    fechaInicio: string(),
    fechaFin: nullable(string()),
    patenteVehiculo: string(),
    tipoVehiculo: string(),
    rutCliente: string(),
    nombreCliente: string(),
});

export const ArriendosSchema = array(ArriendoSchema);

export type ArriendoSchema = InferOutput<typeof ArriendoSchema>;
