import {IProduct} from "../types/product";
import {model,Schema} from "mongoose";

const productSchema : Schema = new Schema(
    {
        name: {
            type:String,
            required:true
        },
        description :{
            type:String,
            required:true
        }
    },
    {timestamps :true }
)

export default model<IProduct>("Product",productSchema)