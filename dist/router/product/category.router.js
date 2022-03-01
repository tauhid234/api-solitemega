"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../../controller/product/category.controller");
const categoryController = new category_controller_1.CategoryController;
const router = (0, express_1.Router)();
router.post("/solite-api/category/add", categoryController.categoryAddController);
router.post("/solite-api/category/update", categoryController.categoryUpdateController);
router.post("/solite-api/category/select", categoryController.categorySelectAllController);
router.post("/solite-api/category/delete", categoryController.categoryDeleteController);
exports.default = router;
