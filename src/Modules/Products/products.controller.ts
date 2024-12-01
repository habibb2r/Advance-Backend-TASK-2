import { Request, Response } from "express";
import { ProductServices } from "./products.service";
import ProductValidation from "./products.validation";




const createProduct = async( req: Request, res: Response)=>{
    try{
        const productData = req.body;
        const ProductValidator = ProductValidation.parse(productData)
        const result = await ProductServices.createProductIntoDB(ProductValidator)
        const data = {
            _id: result._id,
            name: result.name,
            brand: result.brand,
            price: result.price,
            category: result.category,
            description: result.description,
            quantity: result.quantity,
            inStock: result.inStock,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt
        }
        res.status(202).json({
            message: "Bike created successfully",
            success: true,
            data: data
        });
    }catch(error: any){
        res.status(500).json({
            message: error.message || 'Something went wrong',
            success: false,
            error: error
        })
           
    }
}


export const ProductController = {
    createProduct
}