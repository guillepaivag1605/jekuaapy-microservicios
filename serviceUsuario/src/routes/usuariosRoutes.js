import { Router } from 'express'
import { estaAutenticado } from '../middlewares/estaAutenticado.js'
import { verificarCreacionUsuario, verificarActualizacionUsuario, verificarActualizacionContrasena, verificarEliminacionUsuario, verificarReevioCorreoVerificacion } from '../middlewares/usuariosMiddlewares.js'
import { crear, obtener, obtenerAuthentication, actualizar, reeviarCorreoVerificacion, actualizarContrasena, eliminarFotoPerfil, eliminarFotoPortada, eliminar } from '../controllers/usuariosControllers.js'

const router = Router()

router.post('/', verificarCreacionUsuario, crear)

router.get('/:tipo/:valor', obtener)

router.get('/:tipo/:valor/authentication', obtenerAuthentication)

router.put('/', estaAutenticado, verificarActualizacionUsuario, actualizar)

router.put('/reeviarCorreoVerificacion', estaAutenticado, verificarReevioCorreoVerificacion, reeviarCorreoVerificacion)

router.put('/contrasena', estaAutenticado, verificarActualizacionContrasena, actualizarContrasena)

router.delete('/fotoPerfil', estaAutenticado, eliminarFotoPerfil)

router.delete('/fotoPortada', estaAutenticado, eliminarFotoPortada)

// router.delete('/', estaAutenticado, verificarEliminacionUsuario, eliminar)

export default router