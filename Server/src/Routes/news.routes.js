import { Router } from "express";
import {getNews,getNewsById, createNew} from "../Controller/news.controller.js"


const router = Router();

router.get('/gnews', getNews);
router.get('/gnewsID/:id', getNewsById);
router.post('/cnew/', createNew);


export default router;