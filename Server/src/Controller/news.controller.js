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
//Create a new and insert it into the database
export const createNew = async (req, res) =>{
    try{
        const {photo, title, news_body, fec_creation, university_id, personID, newstype_id,user_creation} = req.body;
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
