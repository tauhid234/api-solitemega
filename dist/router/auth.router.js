"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const login = new auth_controller_1.AuthController;
const router = (0, express_1.Router)();
router.post("/solite-api/auth/login", login.LoginController);
exports.default = router;
