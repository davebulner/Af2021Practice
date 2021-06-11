import express from 'express'
const router = express.Router()
import { createCategory, getAllCategories, getVehiclesForCategory } from '../controller/categoryController.js'


router.post('/createCategory', createCategory)
router.get('/', getAllCategories)
router.get('/:id', getVehiclesForCategory)


export default router