"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const goods_controller_1 = require("../../controller/product/goods.controller");
const goodsController = new goods_controller_1.GoodsController;
const router = (0, express_1.Router)();
router.post("/solite-api/goods/add", goodsController.goodsAddController);
router.post("/solite-api/goods/select", goodsController.goodsSelectController);
exports.default = router;
