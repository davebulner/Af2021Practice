import express from 'express'
const router = express.Router()
import { createVehicle, getAllVehicles } from '../controller/vehicleController.js'


router.post('/createVehicle', createVehicle)
router.get('/', getAllVehicles)



export default router