import { Router } from "express";
import controller from "../Controller/cataloge.controller.js"


const router = Router();

router.get('/genders', controller.getGenders);
router.get('/universities', controller.getUniversities);
router.get('/provinces', controller.getProvinces);
router.get('/cantons', controller.getCantons);
router.get('/districts', controller.getDistricts);
router.get('/ntypes', controller.getNewsType)
router.post('/', controller.createGender);


export default router;