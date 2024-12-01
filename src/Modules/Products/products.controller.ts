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



const getAllProducts = async(req: Request, res: Response)=>{
    try{
        const searchTerm = req.query.searchTerm as string;
        const result = await ProductServices.getAllProductsFromDB(searchTerm)
        res.status(202).json({
            message: "Bikes retrieved successfully",
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

const getSpecificProduct = async(req: Request, res: Response)=>{
    try{
        const productId = req.params.productId;
        const result = await ProductServices.getSpecificProductFromDB(productId)
        res.status(202).json({
            message: "Bike retrieved successfully",
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
    createProduct,
    getAllProducts,
    getSpecificProduct

}