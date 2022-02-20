"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_1 = require("../controller/profile.controller");
const profileController = new profile_controller_1.ProfileController;
const router = (0, express_1.Router)();
router.post("/solite-api/profile/add", profileController.createProfile);
exports.default = router;
