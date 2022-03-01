"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
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
const app = (0, express_1.default)();
(0, typeorm_1.createConnection)();
// MIDLEWARE
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
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
app.listen(process.env.PORT || 3000);
console.log("SERVER IS RUNNING ON PORT ", 3000);
