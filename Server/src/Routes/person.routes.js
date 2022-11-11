import { Router } from "express";
import controller from "../Controller/person.controller.js"


const router = Router();

router.get('/person', controller.getPersons);
router.put('/person/:person_id', controller.updatePerson);
router.get('/person/login',controller.login)


export default router;