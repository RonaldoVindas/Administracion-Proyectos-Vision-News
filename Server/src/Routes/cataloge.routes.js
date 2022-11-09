import { Router } from "express";
import controller from "../Controller/cataloge.controller.js"


const router = Router();

router.get('/ggender', controller.getGender);
router.post('/pgender', controller.createGender);


export default router;