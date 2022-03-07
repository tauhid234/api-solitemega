import { Router } from "express";
import { AuthAdminController } from "../../controller/admin/auth_admin.controller";



const authAdminController = new AuthAdminController;
const router = Router();

router.post("/solite-api/auth/admin/login", authAdminController.AuthAdminLogin);

export default router;