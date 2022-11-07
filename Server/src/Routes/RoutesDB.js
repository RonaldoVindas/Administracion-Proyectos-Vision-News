import { Router } from "express";

import controller from "../Controller/ControllerDB.js"


const router = Router();

router.get('/', controller.getGender);
router.post('/', controller.createGender);


export default router;