import { Request, Response } from "express";
import { ProductServices } from "./products.service";




const createProduct = async( req: Request, res: Response)=>{
    try{
        const {product: productData} = req.body;
        const result = await ProductServices.createProductIntoDB(productData)
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