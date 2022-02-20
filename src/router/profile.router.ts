import { Router } from "express";
import { ProfileController } from "../controller/profile.controller";


const profileController = new ProfileController;
const router = Router();

router.post("/solite-api/profile/add", profileController.createProfile);
export default router;