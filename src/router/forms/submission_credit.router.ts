import { Router } from "express";
import { SubmissionCreditController } from "../../controller/forms/submission_credit.controller";



const submissionCreditController = new SubmissionCreditController;
const router = Router();

router.post("/solite-api/submission-credit/add", submissionCreditController.SubmissionCreditAddController);
router.post("/solite-api/submission-credit/select", submissionCreditController.SubmissionCreditSelectController);

export default router;