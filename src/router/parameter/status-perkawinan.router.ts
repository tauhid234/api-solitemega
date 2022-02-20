import { Router } from "express";
import { StatusPerkawinanController } from "../../controller/parameter/status-perkawinan.controller";


const statusPerkawinanController = new StatusPerkawinanController;
const router = Router();

router.post("/solite-api/status-perkawinan/add", statusPerkawinanController.statusPerkawinanAddController);
router.post("/solite-api/status-perkawinan/update", statusPerkawinanController.statusPerkawinanUpdateController);
router.post("/solite-api/status-perkawinan/select", statusPerkawinanController.statusPerkawinanSelectAllController);
router.post("/solite-api/status-perkawinan/delete", statusPerkawinanController.statusPerkawinanDeleteController);

export default router;