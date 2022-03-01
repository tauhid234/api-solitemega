import { Router } from "express";
import { CategoryController } from "../../controller/product/category.controller";


const categoryController = new CategoryController;
const router = Router();

router.post("/solite-api/category/add", categoryController.categoryAddController);
router.post("/solite-api/category/update", categoryController.categoryUpdateController);
router.post("/solite-api/category/select", categoryController.categorySelectAllController);
router.post("/solite-api/category/delete", categoryController.categoryDeleteController);

export default router;