import { Router } from "express";
import {getNews,getNewsById, createNew, getNewsComments, getNewsCalification, createCommet, createCalification,createLikes,getNewsLikes} from "../Controller/news.controller.js"


const router = Router();

router.get('/gnews', getNews);
router.get('/gnewsID/:id', getNewsById);
router.post('/cnew/', createNew);
router.post('/crtcomment', createCommet);
router.get('/gnewsComments/:id', getNewsComments);
router.get('/gnewsCalification/:id', getNewsCalification);
router.get('/califications', createCalification);
router.get('/likes', createLikes );
router.get('/gnewsLikes/:id/:id2', getNewsLikes);



export default router;