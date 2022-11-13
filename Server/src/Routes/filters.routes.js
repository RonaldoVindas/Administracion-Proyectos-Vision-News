import { Router } from "express";
import {getNews,getNewsById,getNewsByNewstype_id,getNewsByPersonID,getNewsByRelease_date,getNewsByUniversity_id} from "../Controller/filter.controller.js"


const router = Router();

router.get('/gnews', getNews);
router.get('/gnewsID/:id', getNewsById);
router.get('/gnews', getNews);

router.get('/filterNewstype_id/:id', getNewsByNewstype_id);
router.get('/filterNewsPersonID/:id', getNewsByPersonID);
router.get('/filterNewselease_date/:id', getNewsByRelease_date);// revisar 
router.get('/filterNewsUniversity_id/:id', getNewsByUniversity_id);
export default router;