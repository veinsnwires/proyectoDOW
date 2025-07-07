import { Router } from "express";
import { login } from "./handlers/auth";
import { cambiarPassword, nuevoUsuario } from "./handlers/usuarios";
import { eliminarArriendo, finalizarArriendo, getArriendosActivos, getArriendosFinalizados, getArriendosPorCategoria, nuevoArriendo } from "./handlers/arriendos";



const router = Router()


//ARRIENDOS
router.get('/arriendos/activos', getArriendosActivos)
router.get('/arriendos/finalizados', getArriendosFinalizados)
router.get('/arriendos/resumen', getArriendosPorCategoria)
router.post('/arriendos/nuevo', nuevoArriendo);
router.put('/arriendos/devolver/:id', finalizarArriendo)
router.delete('/arriendos/eliminar/:id', eliminarArriendo)
//LOGIN
router.post('/auth/login', login)
//USUARIOS
router.post('/usuarios/signup', nuevoUsuario)
router.put('/usuarios/cambiar-password', cambiarPassword)



//REGISTER
export default router