import express from "express";
import { isSellerAuth,login,sellerLogout } from "../controllers/SellerController.js";
import authSeller from "../middlewares/authSeller.js";


const sellerRouter = express.Router();

sellerRouter.post('/login',login);
sellerRouter.get('/is-auth',authSeller,isSellerAuth);
sellerRouter.post('/sellerLogout',authSeller,sellerLogout);

export default sellerRouter;
