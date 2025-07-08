import { Router } from 'express';
import { login } from './handlers/usuarios';
import { cambiarPassword, nuevoUsuario } from './handlers/usuarios';
import {
    eliminarArriendo,
    finalizarArriendo,
    getArriendosActivos,
    getArriendosFinalizados,
    getArriendosPorCategoria,
    nuevoArriendo,
} from './handlers/arriendos';
import { verificarToken } from './middleware/verificarToken';

const router = Router();

//LOGIN
router.post('/usuarios/login', login);
router.post('/usuarios/signup', nuevoUsuario);

//MIDDLEWARE PARA TODOS LOS ENDPOINTS SUBSIGUIENTES
router.use(verificarToken);

//ARRIENDOS
router.get('/arriendos/activos', getArriendosActivos);
router.get('/arriendos/finalizados', getArriendosFinalizados);
router.get('/arriendos/resumen', getArriendosPorCategoria);
router.post('/arriendos/nuevo', nuevoArriendo);
router.put('/arriendos/devolver/:id', finalizarArriendo);
router.delete('/arriendos/eliminar/:id', eliminarArriendo);

//USUARIOS
router.put('/usuarios/cambiar-password', cambiarPassword);

export default router;
