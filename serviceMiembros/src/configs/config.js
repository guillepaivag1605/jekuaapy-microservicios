import functions from 'firebase-functions'
import configJson from '../../config.json' assert { type: 'json' }
import { getBaseUrlOfServices } from './helpers/getBaseUrlOfServices.js'

const config = Object.keys(functions.config()).length ? functions.config() : configJson

const urlServices = getBaseUrlOfServices(config.environment.mode === 'production', config.execution.mode === 'remote')

export default {
    environment: config.environment.mode,
    execution: config.execution.mode,
    production: config.environment.mode === 'production',
    remote: config.execution.mode === 'remote',
    urlServices,
}