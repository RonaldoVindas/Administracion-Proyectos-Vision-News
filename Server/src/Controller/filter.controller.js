import {db} from "../database.js"


//Get all the news from de database
export const getNews = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT * FROM news");
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 





//Insert news calificatión

//Insert news likes

//Get news by ID
export const getNewsById = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT news.news_id, news.title, news.news_body, news.photo, news.release_date, university.acronym, news_type.name FROM news INNER JOIN university ON news.university_id = university.university_id INNER JOIN news_type ON news.newstype_id = news_type.newsType_id;");
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

export const getNewsByUniversity_id = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT news.news_id, news.title, news.news_body, news.photo, news.release_date, university.acronym, news_type.name FROM news INNER JOIN university ON news.university_id = university.university_id INNER JOIN news_type ON news.newstype_id = news_type.newsType_id WHERE news.university_id = ?", [req.params.id]);
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

export const getNewsByPersonID = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT news.news_id, news.title, news.news_body, news.photo, news.release_date, university.acronym, news_type.name FROM news INNER JOIN university ON news.university_id = university.university_id INNER JOIN news_type ON news.newstype_id = news_type.newsType_id WHERE news.personID = ?", [req.params.id]);
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

export const getNewsByRelease_date = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT news.news_id, news.title, news.news_body, news.photo, news.release_date, university.acronym, news_type.name FROM news INNER JOIN university ON news.university_id = university.university_id INNER JOIN news_type ON news.newstype_id = news_type.newsType_id WHERE news.release_date = ?", [req.params.id]);
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

export const getNewsByNewstype_id = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT news.news_id, news.title, news.news_body, news.photo, news.release_date, university.acronym, news_type.name FROM news INNER JOIN university ON news.university_id = university.university_id INNER JOIN news_type ON news.newstype_id = news_type.newsType_id WHERE news.newstype_id = ?", [req.params.id]);
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 