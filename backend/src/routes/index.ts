import { Router } from "express";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../controllers/products/index";

const router: Router = Router()

router.get("/products", getProducts)

router.post("/add-product", addProduct)

router.put("/edit-product/:id", updateProduct)

router.delete("/delete-product/:id", deleteProduct)

export default router