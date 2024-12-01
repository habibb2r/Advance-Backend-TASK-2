import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import OrderValidation from "./order.validation";

const createOrder = async(req: Request, res: Response)=>{
    try{
        const order = req.body;
        const orderValidator = OrderValidation.parse(order)
        const result = await OrderServices.createOrderIntoDB(orderValidator)
        const data = {
            _id: result._id,
            email: result.email,
            product: result.product,
            quantity: result.quantity,
            totalPrice: result.totalPrice,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt
        }     
        res.status(202).json({
            message: "Order created successfully",
            success: true,
            data: data
        });
    
    }catch(error : any){
        let errorMessage = 'Something went wrong';
        if (error.name === 'ZodError') {
          errorMessage = 'Validation error';
        } else if (error.stack && error.stack.length > 0) {
          const stackLines = error.stack.split('\n');
          if (stackLines.length > 0) {
            errorMessage = stackLines[0].split(': ')[1] || errorMessage;
          }
        }
        res.status(500).json({
          message: errorMessage,
          success: false,
          stack: error.stack ? error.stack.split('\n') : []
        });
      }

}

export const OrderController = {
    createOrder
}