"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_image_controller_1 = require("../../controller/product/product_image.controller");
const productImageController = new product_image_controller_1.ProductImageController;
const router = (0, express_1.Router)();
router.post("/solite-api/product-image/add", productImageController.productImageAddController);
exports.default = router;
