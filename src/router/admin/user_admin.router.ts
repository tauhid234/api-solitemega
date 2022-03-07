import { Router } from "express";
import { UserAdminController } from "../../controller/admin/user_admin.controller";



const userAdminController = new UserAdminController;
const router = Router();

router.post("/solite-api/user-admin/add", userAdminController.UserAdminAddController);
router.post("/solite-api/user-admin/update", userAdminController.UserAdminUpdateController);
router.post("/solite-api/user-admin/select", userAdminController.UserAdminSelectController);
router.post("/solite-api/user-admin/delete", userAdminController.UserAdminDeleteController);

export default router;