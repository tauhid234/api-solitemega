import { Router } from "express";
import { CartController } from "../../controller/product/cart.controller";


const cartController = new CartController;
const router = Router();

router.post("/solite-api/cart/add", cartController.cartAddController);
router.post("/solite-api/cart/select", cartController.cartSelectController);
router.post("/solite-api/cart/delete", cartController.cartDeleteController);

export default router;