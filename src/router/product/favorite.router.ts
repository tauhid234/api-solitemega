import { Router } from "express";
import { FavoriteController } from "../../controller/product/favorite.controller";



const favoriteController = new FavoriteController;
const router = Router();

router.post("/solite-api/favorite/add", favoriteController.FavoriteAddController);
router.post("/solite-api/favorite/select", favoriteController.FavoriteSelectController);
router.post("/solite-api/favorite/delete", favoriteController.FavoriteDeleteController);

export default router;