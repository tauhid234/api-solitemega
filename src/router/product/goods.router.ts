import { Router } from "express";
import { GoodsController } from "../../controller/product/goods.controller";



const goodsController = new GoodsController;
const router = Router();

router.post("/solite-api/goods/add", goodsController.goodsAddController);
router.post("/solite-api/goods/select", goodsController.goodsSelectController);

export default router;