import { Response, Request } from "express"
import { IProduct } from "../../types/product"
import Product from "../../models/product"

const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products: IProduct[] = await Product.find()
        res.status(200).json({ products })
    } catch (error) {
        throw error
    }
}

const addProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IProduct, "name" | "description" >

        const product: IProduct = new Product({
        name: body.name,
        description: body.description,
        })
        console.log(product)

        const newProduct: IProduct = await product.save()
        const allProducts: IProduct[] = await Product.find()

        res
        .status(201)
        .json({ message: "Product added", product: newProduct, products: allProducts })
    } catch (error) {
        throw error
    }
}

const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateProduct: IProduct | null = await Product.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allProducts: IProduct[] = await Product.find()
        res.status(200).json({
            message: "Product updated",
            product: updateProduct,
            products: allProducts,
        })
    } catch (error) {
            throw error
    }
}

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedProduct: IProduct | null = await Product.findByIdAndRemove(
            req.params.id
        )
        const allProducts: IProduct[] = await Product.find()
            res.status(200).json({
            message: "Product deleted",
            product: deletedProduct,
            products: allProducts,
        })
        } catch (error) {
            throw error
        }
}

export { getProducts, addProduct, updateProduct, deleteProduct }