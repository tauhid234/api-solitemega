"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const submission_credit_controller_1 = require("../../controller/forms/submission_credit.controller");
const submissionCreditController = new submission_credit_controller_1.SubmissionCreditController;
const router = (0, express_1.Router)();
router.post("/solite-api/submission-credit/add", submissionCreditController.SubmissionCreditAddController);
exports.default = router;
