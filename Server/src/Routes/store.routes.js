import { Router } from "express";
import controller from "../Controller/store.controller.js"


const router = Router();

router.get('/gproducts', controller.getProductItems);
router.get('/gpproducts/:person_id', controller.getProductsBought);
router.put('/store/:product_id', controller.updateProduct);
router.get('/search/:product_id', controller.getProductByID);
router.post('/addRelationships', controller.newRelationship);
router.post('/CreateProduct', controller.newProduct);
export default router;