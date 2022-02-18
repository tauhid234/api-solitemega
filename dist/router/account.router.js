"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_controller_1 = require("../controller/account.controller");
const accountController = new account_controller_1.AccountController;
const router = (0, express_1.Router)();
router.post("/solite-api/user/add", accountController.createAccount);
exports.default = router;
