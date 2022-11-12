import { Router } from "express";
import controller from "../Controller/store.controller.js"


const router = Router();

router.get('/gproducts', controller.getProductItems);

export default router;