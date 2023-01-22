import express from 'express'
import cors from 'cors'
import config from './configs/config.js'

// Get Routes
import usuariosRoutes from './routes/usuariosRoutes.js'
import informacionUsuarioRoutes from './routes/informacionUsuariosRoutes.js'

// Manejador de errores
import { errorHandler } from './helpers/errors/error-handler.js'

// App
const app = express()

// Middlewares
const origin = []
const urlsProduccion = ['']
const urlsDesarrolloLocal = ['http://localhost:3000']
const urlsDesarrolloRemoto = ['']
config.production ? origin.push(...urlsProduccion) : ''
!config.production && config.local ? origin.push(...urlsDesarrolloLocal) : ''
!config.production && !config.local ? origin.push(...urlsDesarrolloRemoto) : ''

app.use(cors({
  credentials: true,
  origin,
  methods: ['GET','POST','DELETE','PUT','UPDATE','PATCH'],
  allowedHeaders: ['Authorization', 'Content-Type']
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/usuarios', usuariosRoutes)
app.use('/informaciones', informacionUsuarioRoutes)

// Manejo de errores
app.use((error, req, res, next) => { 
  console.log('Error en middleware: ', error)
  const respuestaManejada = errorHandler(error)
  return res.status(respuestaManejada.estado).json(respuestaManejada.getRespuesta())
})

export default app