"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_admin_controller_1 = require("../../controller/admin/auth_admin.controller");
const authAdminController = new auth_admin_controller_1.AuthAdminController;
const router = (0, express_1.Router)();
router.post("/solite-api/auth/admin/login", authAdminController.AuthAdminLogin);
exports.default = router;
