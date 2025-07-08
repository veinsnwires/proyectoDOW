import { Request, Response } from 'express';
import Arriendo from '../models/Arriendo';
import { Sequelize, Op } from 'sequelize';

export const getArriendosActivos = async (
    request: Request,
    response: Response
) => {
    try {
        const arriendosActivos = await Arriendo.findAll({
            where: { fechaFin: null },
        });
        response.json({ data: arriendosActivos });
    } catch (error) {
        console.error('Error al obtener los arriendos activos:', error);
        response
            .status(500)
            .json({ error: 'Error al obtener arriendos activos' });
    }
};

export const getArriendosFinalizados = async (
    request: Request,
    response: Response
) => {
    try {
        const arriendosFinalizados = await Arriendo.findAll({
            //Op.not permite devolver todo lo que no sea null
            where: { fechaFin: { [Op.not]: null } },
        });
        response.json({ data: arriendosFinalizados });
    } catch (error) {
        console.error('Error al obtener los arriendos finalizados:', error);
        response
            .status(500)
            .json({ error: 'Error al obtener arriendos finalizados' });
    }
};

export const getArriendosPorCategoria = async (
    request: Request,
    response: Response
) => {
    try {
        const resumen = await Arriendo.findAll({
            attributes: [
                ['tipo_vehiculo', 'tipoVehiculo'],
                [
                    Sequelize.fn('COUNT', Sequelize.col('id')),
                    'cantidadArriendos',
                ],
            ],
            group: ['tipo_vehiculo'],
            order: [['tipo_vehiculo', 'ASC']],
        });

        console.log(
            'Resumen de arriendos por categoría:',
            resumen.map(r => r.toJSON())
        );

        response.json(resumen.map(r => r.toJSON()));
    } catch (error) {
        console.error('Error al obtener arriendos por categoría:', error);
        response
            .status(500)
            .json({ error: 'Error al obtener arriendos por categoría' });
    }
};

export const finalizarArriendo = async (
    request: Request,
    response: Response
    //Para saber que la promesa que retorna async no tendrá contenido:
): Promise<void> => {
    const { id } = request.params;
    //Validación por si no se ingresa ID
    if (!id) {
        response.status(400).json({ error: 'ID de arriendo requerido' });
        return;
    }

    try {
        // Buscar el arriendo que calce con id
        const arriendo = await Arriendo.findByPk(id);

        if (!arriendo) {
            response.status(404).json({ error: 'Arriendo no encontrado' });
            return;
        }

        // Marcarlo como finalizado con la fecha del sistema
        arriendo.fechaFin = new Date().toISOString().split('T')[0]; // Fecha actual yyyy-mm-dd
        await arriendo.save();

        //Si está todo ok:
        response.status(200).json({
            mensaje: `Arriendo ${id} finalizado correctamente`,
            arriendo,
        });
    } catch (error) {
        console.error('Error al finalizar arriendo:', error);
        response.status(500).json({ error: 'Error al finalizar el arriendo' });
    }
};

export const eliminarArriendo = async (
    request: Request,
    response: Response
): Promise<void> => {
    const { id } = request.params;

    try {
        const arriendo = await Arriendo.findByPk(id);

        if (!arriendo) {
            response.status(404).json({ error: 'Arriendo no encontrado' });
            return;
        }

        await arriendo.destroy();

        response.status(200).json({
            mensaje: `Arriendo con ID ${id} eliminado correctamente`,
        });
    } catch (error) {
        console.error('Error al eliminar arriendo:', error);
        response.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const nuevoArriendo = async (
    request: Request,
    response: Response
): Promise<void> => {
    try {
        const { patenteVehiculo, tipoVehiculo, rutCliente, nombreCliente } =
            request.body;

        // Validación básica
        if (
            !patenteVehiculo ||
            !tipoVehiculo ||
            !rutCliente ||
            !nombreCliente
        ) {
            response.status(400).json({ error: 'Faltan campos obligatorios' });
            return;
        }

        // Crear el arriendo
        const nuevo = await Arriendo.create({
            patenteVehiculo,
            tipoVehiculo,
            rutCliente,
            nombreCliente,
            fechaInicio: new Date().toISOString().split('T')[0], // YYYY-MM-DD
            fechaFin: null,
        });

        response.status(201).json({
            mensaje: 'Arriendo creado correctamente',
            arriendo: nuevo,
        });
    } catch (error) {
        console.error('Error al crear arriendo:', error);
        response.status(500).json({ error: 'Error al crear arriendo' });
    }
};
