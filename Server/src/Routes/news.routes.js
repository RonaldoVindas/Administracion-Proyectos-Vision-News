import { Router } from "express";
import {getNews,getNewsById} from "../Controller/news.controller.js"


const router = Router();

router.get('/gnews', getNews);
router.post('/gnewsID', getNewsById);


export default router;