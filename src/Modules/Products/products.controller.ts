import { Request, Response } from "express";
import { ProductServices } from "./products.service";
import ProductValidation from "./products.validation";




const createProduct = async( req: Request, res: Response)=>{
    try{
        const {product: productData} = req.body;
        const ProductValidator = ProductValidation.parse(productData)
        const result = await ProductServices.createProductIntoDB(ProductValidator)
        res.status(202).json({
            message: "Bike created successfully",
            success: true,
            data: result
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