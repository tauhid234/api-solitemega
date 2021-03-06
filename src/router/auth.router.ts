import { Router } from "express";
import { AuthController } from "../controller/auth.controller";


const login = new AuthController;
const router = Router();

router.post("/solite-api/auth/login", login.LoginController);

export default router;