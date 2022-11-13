import { Router } from "express";
import controller from "../Controller/store.controller.js"


const router = Router();

router.get('/gproducts', controller.getProductItems);
router.get('/gpproducts', controller.getProductsBought);
router.put('/store/:product_id', controller.updateProduct);

export default router;