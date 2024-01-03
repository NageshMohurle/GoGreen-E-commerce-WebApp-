import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
import {
    brainTreePaymentController,
    braintreeTokenController,
    createProductController,
    deleteProductController,
    getProductController,
    getSingleProductController,
    productCategoryController,
    productCountController,
    productFiltersController,
    productListController,
    productPhotoController,
    relatedProductController,
    searchProductController,
    updateProductController
} from "../controllers/productController.js";
import formidable from 'express-formidable'


const router = express.Router()

//routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)


//update product
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);

//get Products
router.get('/get-product', getProductController)

// single porduct
router.get("/get-product/:slug", getSingleProductController)

// get photo
router.get("/product-photo/:pid", productPhotoController)

// delete product
router.delete("/delete-product/:pid", deleteProductController)

//filter product
router.post("/product-filters", productFiltersController);

//Product count
router.get("/product-count", productCountController);

//Product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar products
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//Payment Routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router