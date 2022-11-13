import {db} from "../database.js"
import {uploadImage} from '../libs/cloudinary.js'
import fs from 'fs-extra'

//Get all the news from de database
export const getNews = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT news.news_id, news.title, news.news_body, news.photo, news.release_date, university.acronym, news_type.name FROM news INNER JOIN university ON news.university_id = university.university_id INNER JOIN news_type ON news.newstype_id = news_type.newsType_id;");
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 
//Create a new and insert it into the database
export const createNew = async (req, res) =>{
    try{
        const {title, news_body, newstype_id} = req.body;
        let photo = null;
        let fec_creation = new Date(Date.now());
        let personID = 0;
        let user_creation = 'Gerson';
        let university_id = 0;


        if (req.files.photo){
            const result = await uploadImage(req.files.photo.tempFilePath);
            await fs.remove(req.files.photo.tempFilePath)
            photo = result.secure_url        
        }

        const result = await db.query('INSERT INTO news (photo, title, news_body, fec_creation, university_id, personID, newstype_id,user_creation) VALUES (?,?,?,?,?,?,?,?) ', [photo, title, news_body, fec_creation, university_id, personID, newstype_id,user_creation]);
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

//Get news by ID
export const getNewsById = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT news.news_id, news.title, news.news_body, news.photo, news.release_date, person.email, person.first_name, person.last_name, person.photo as pphoto, person.average_calification, university.acronym, person_type.persontype_name   FROM news INNER JOIN person ON news.personID = person.id_person INNER JOIN university ON person.university_id = university.university_id INNER JOIN person_type ON person_type.persontype_id = person.id_person WHERE news.news_id = ?", [req.params.id]);
        res.json(rows[0]);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 


// Get news calification
export const getNewsCalification = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT * FROM calification WHERE id_new = ?", [req.params.id]);
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 
//Insert news calificatión

//Get new comments
export const getNewsComments = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT * FROM comment WHERE newsID = ?", [req.params.id]);
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 
//Insert news comments
export const createCommet = async (req, res) =>{
    try{
        const {newsId, body, user_id} = req.body;

        const result = await db.query('INSERT INTO comment (newsId, body, user_id) VALUES (?,?,?)', [newsId, body, user_id]);
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};

//Get news likes

//Insert news likes




