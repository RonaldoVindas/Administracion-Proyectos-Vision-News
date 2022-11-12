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
        const [rows] = await db.query("SELECT * FROM news WHERE news_id = ?", [req.params.id]);
        res.json(rows[0]);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

export const getNewsByUniversity_id = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT * FROM news WHERE university_id = ?", [req.params.id]);
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

export const getNewsByPersonID = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT * FROM news WHERE personID = ?", [req.params.id]);
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

export const getNewsByRelease_date = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT * FROM news WHERE release_date = ?", [req.params.id]);
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

export const getNewsByNewstype_id = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT * FROM news WHERE newstype_id = ?", [req.params.id]);
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 