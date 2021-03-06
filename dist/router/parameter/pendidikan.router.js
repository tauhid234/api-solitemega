"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pendidikan_controller_1 = require("../../controller/parameter/pendidikan.controller");
const pendidikanController = new pendidikan_controller_1.PendidikanController;
const router = (0, express_1.Router)();
router.post("/solite-api/pendidikan/add", pendidikanController.pendidikanAddController);
router.post("/solite-api/pendidikan/update", pendidikanController.pendidikanUpdateController);
router.post("/solite-api/pendidikan/select", pendidikanController.pendidikanSelectAllController);
router.post("/solite-api/pendidikan/delete", pendidikanController.pendidikanDeleteController);
exports.default = router;
