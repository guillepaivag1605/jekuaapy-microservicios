import { enviarCorreo } from "../helpers/enviarCorreo.js"
import Correo from "../models/Correo.js"

class AwsSesCorreosRepository {

    constructor(isTest) {
        this.isTest = isTest
    }

    async enviarVerificacionDeCorreo(correo = Correo.params) {
        return await enviarCorreo({
            from: correo.correoEmisor,
            to: correo.correoReceptor,
            subject: correo.asunto,
            html: correo.contenido
        })
    }

    _obtenerCorreo(data = Correo.params) {
        return new Correo({
            correoEmisor: data.correoEmisor,
            correoReceptor: data.correoReceptor,
            asunto: data.asunto,
            contenido: data.contenido,
        })
    }
}

export default AwsSesCorreosRepository