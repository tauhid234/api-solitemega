"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// upload
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const typeorm_1 = require("typeorm");
// AUTH ROUTER
const auth_router_1 = __importDefault(require("./router/auth.router"));
// ACCOUNT ROUTER
const account_router_1 = __importDefault(require("./router/account.router"));
const profile_router_1 = __importDefault(require("./router/profile.router"));
// PARAMETER
const pendidikan_router_1 = __importDefault(require("./router/parameter/pendidikan.router"));
const status_perkawinan_router_1 = __importDefault(require("./router/parameter/status-perkawinan.router"));
// PRODUCT
const category_router_1 = __importDefault(require("./router/product/category.router"));
const cart_router_1 = __importDefault(require("./router/product/cart.router"));
const goods_router_1 = __importDefault(require("./router/product/goods.router"));
const product_image_router_1 = __importDefault(require("./router/product/product_image.router"));
const favorite_router_1 = __importDefault(require("./router/product/favorite.router"));
// PAYMENT
const address_shipment_router_1 = __importDefault(require("./router/payment/address_shipment.router"));
// FORMS
const submission_credit_router_1 = __importDefault(require("./router/forms/submission_credit.router"));
// ADMIN
const user_admin_router_1 = __importDefault(require("./router/admin/user_admin.router"));
const auth_admin_router_1 = __importDefault(require("./router/admin/auth_admin.router"));
const app = (0, express_1.default)();
(0, typeorm_1.createConnection)();
// MIDLEWARE
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)());
// ROUTE AUTH
app.use(auth_router_1.default);
// ROUTE ACCOUNT
app.use(account_router_1.default);
app.use(profile_router_1.default);
// ROUTE PARAMETER
app.use(pendidikan_router_1.default);
app.use(status_perkawinan_router_1.default);
// ROUTE PRODUCT
app.use(category_router_1.default);
app.use(cart_router_1.default);
app.use(goods_router_1.default);
app.use(product_image_router_1.default);
app.use(favorite_router_1.default);
// PAYMENT
app.use(address_shipment_router_1.default);
// FORMS
app.use(submission_credit_router_1.default);
// ADMIN
app.use(user_admin_router_1.default);
app.use(auth_admin_router_1.default);
app.listen(process.env.PORT || 3000);
console.log("SERVER IS RUNNING ON PORT ", 3000);
