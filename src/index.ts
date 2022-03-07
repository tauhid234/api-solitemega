import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// upload
import upload from 'express-fileupload';

import { createConnection } from 'typeorm';

// AUTH ROUTER
import authRouter from './router/auth.router';

// ACCOUNT ROUTER
import accountRouter from './router/account.router';
import porfileRouter from './router/profile.router';

// PARAMETER
import pendidikanRouter from './router/parameter/pendidikan.router';
import statusPerkawinanRouter from './router/parameter/status-perkawinan.router';

// PRODUCT
import categoryRouter from './router/product/category.router';
import cartRouter from './router/product/cart.router';
import goodsRouter from './router/product/goods.router';
import productImageRouter from './router/product/product_image.router';
import favoriteRouter from './router/product/favorite.router';

// PAYMENT
import addressShipmentRouter from './router/payment/address_shipment.router';

// FORMS
import submissionCreditRouter from './router/forms/submission_credit.router';

// ADMIN
import userAdminRouter from './router/admin/user_admin.router';
import authAdminRouter from './router/admin/auth_admin.router';


const app = express();
createConnection();

// MIDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(upload());


// ROUTE AUTH
app.use(authRouter);

// ROUTE ACCOUNT
app.use(accountRouter);
app.use(porfileRouter);

// ROUTE PARAMETER
app.use(pendidikanRouter);
app.use(statusPerkawinanRouter);

// ROUTE PRODUCT
app.use(categoryRouter);
app.use(cartRouter);
app.use(goodsRouter);
app.use(productImageRouter);
app.use(favoriteRouter);

// PAYMENT
app.use(addressShipmentRouter);

// FORMS
app.use(submissionCreditRouter);

// ADMIN
app.use(userAdminRouter);
app.use(authAdminRouter);

app.listen(process.env.PORT || 3000);
console.log("SERVER IS RUNNING ON PORT ",3000);