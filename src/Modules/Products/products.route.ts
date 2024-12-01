import express from 'express'
import { ProductController } from './products.controller';


const router = express.Router();


router.post('/', ProductController.createProduct)
router.get('/', ProductController.getAllProducts)
router.get('/:productId', ProductController.getSpecificProduct)


export const ProductRoutes = router