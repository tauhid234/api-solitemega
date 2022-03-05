import { Router } from "express";
import { ProductImageController } from "../../controller/product/product_image.controller";


const productImageController = new ProductImageController;
const router = Router();

router.post("/solite-api/product-image/add", productImageController.productImageAddController);

export default router;