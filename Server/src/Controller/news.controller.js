import {db} from "../database.js"
import {uploadImage} from '../libs/cloudinary.js'
import fs from 'fs-extra'

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

//Insert news calificatión

//Insert news likes

//Get news by ID
export const getNewsById = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT * FROM news WHERE news_id = ?", [req.params.id]);
        res.json(rows[0]);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 
