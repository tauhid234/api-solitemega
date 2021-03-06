"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_admin_controller_1 = require("../../controller/admin/user_admin.controller");
const userAdminController = new user_admin_controller_1.UserAdminController;
const router = (0, express_1.Router)();
router.post("/solite-api/user-admin/add", userAdminController.UserAdminAddController);
router.post("/solite-api/user-admin/update", userAdminController.UserAdminUpdateController);
router.post("/solite-api/user-admin/select", userAdminController.UserAdminSelectController);
router.post("/solite-api/user-admin/delete", userAdminController.UserAdminDeleteController);
exports.default = router;
