import { Router } from "express";
import { AccountController } from "../controller/account.controller";


const accountController = new AccountController;
const router = Router();

router.post("/solite-api/user/add", accountController.createAccount);

export default router;