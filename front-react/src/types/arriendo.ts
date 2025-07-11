import {
    array,
    object,
    string,
    number,
    nullable,
    type InferOutput,
    optional,
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

export const ArriendoResumenSchema = object({
    tipoVehiculo: string(),
    cantidadArriendos: number(),
});

export const ArriendosResumenSchema = array(ArriendoResumenSchema);

export type ArriendoResumenSchema = InferOutput<typeof ArriendoResumenSchema>;

export const ArriendoFormSchema = object({
    fechaInicio: string(),
    fechaFin: optional(nullable(string())),
    patenteVehiculo: string(),
    tipoVehiculo: string(),
    rutCliente: string(),
    nombreCliente: string(),
});

export const ArriendosSchema = array(ArriendoSchema);

export type ArriendoSchema = InferOutput<typeof ArriendoSchema>;
