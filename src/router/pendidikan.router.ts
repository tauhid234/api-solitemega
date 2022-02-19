import { Router } from "express";
import { PendidikanController } from "../controller/pendidikan.controller";


const pendidikanController = new PendidikanController;
const router = Router();

router.post("/solite-api/pendidikan/add", pendidikanController.pendidikanAddController);
router.post("/solite-api/pendidikan/update", pendidikanController.pendidikanUpdateController);
router.post("/solite-api/pendidikan/select", pendidikanController.pendidikanSelectAllController);
router.post("/solite-api/pendidikan/delete", pendidikanController.pendidikanDeleteController);

export default router;