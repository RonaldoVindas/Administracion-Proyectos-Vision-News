import { db } from "../database.js"
import { uploadImage } from '../libs/cloudinary.js'
import fs from 'fs-extra'

//Get all the news from de database
export const getNews = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT news.news_id, news.title, news.news_body, news.photo, news.release_date, university.acronym, news_type.name FROM news INNER JOIN university ON news.university_id = university.university_id INNER JOIN news_type ON news.newstype_id = news_type.newsType_id;");
        res.json(rows);
    } catch (e) {
        res.status(500);
        res.send(e.message);
    }
};
//Create a new and insert it into the database
export const createNew = async (req, res) => {
    try {
        const { title, news_body, newstype_id, personID, user_creation, university_id} = req.body;
        let photo = null;
        let fec_creation = new Date(Date.now());
        


        if (req.files.photo) {
            const result = await uploadImage(req.files.photo.tempFilePath);
            await fs.remove(req.files.photo.tempFilePath)
            photo = result.secure_url
        }

        const result = await db.query('INSERT INTO news (photo, title, news_body, fec_creation, university_id, personID, newstype_id,user_creation) VALUES (?,?,?,?,?,?,?,?) ', [photo, title, news_body, fec_creation, university_id, personID, newstype_id, user_creation]);
        res.json(result);
    } catch (e) {
        res.status(500);
        res.send(e.message);
    }
};

//Get news by ID
export const getNewsById = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT news.news_id, news.title, news.news_body, news.photo, news.release_date, person.email, person.first_name, person.last_name, person.photo as pphoto, person.average_calification, university.acronym, person_type.persontype_name   FROM news INNER JOIN person ON news.personID = person.id_person INNER JOIN university ON person.university_id = university.university_id INNER JOIN person_type ON person_type.persontype_id = person.persontype_id WHERE news.news_id = ?", [req.params.id]);
        console.log(rows)
        res.json(rows[0]);
    } catch (e) {
        res.status(500);
        res.send(e.message);
        console.log(e)
    }
};


// Get news calification
export const getNewsCalification = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM calification WHERE id_new = ?", [req.params.id]);
        res.json(rows);
    } catch (e) {
        res.status(500);
        res.send(e.message);
    }
};
//Insert news calificatión
export const createCalification = async (req, res) => {
    try {
        const { id_new, value, id_user } = req.body;

        const result = await db.query('INSERT INTO calification (id_new, value, id_user) VALUES (?,?,?)', [id_new, value, id_user]);
        res.json(result);
    } catch (e) {
        res.status(500);
        res.send(e.message);
    }
};
//Get new comments
export const getNewsComments = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT comment.body,person.photo FROM comment INNER JOIN person ON comment.user_id = person.id_person WHERE newsID = ?", [req.params.id]);
        res.json(rows);
    } catch (e) {
        res.status(500);
        res.send(e.message);
    }
};
//Insert news comments
export const createCommet = async (req, res) => {
    try {
        const { newsID, body, user_id } = req.body;

        const result = await db.query('INSERT INTO comment (newsID, body, user_id) VALUES (?,?,?)', [newsID, body, user_id]);
        res.json(result);
    } catch (e) {
        res.status(500);
        res.send(e.message);
    }
};

//Get news likes
export const createLikes = async (req, res) => {
    try {
        const { news_id, person_id } = req.body;

        const result = await db.query('INSERT INTO personxnews (news_id, person_id) VALUES (?,?)', [news_id, person_id]);
        res.json(result);
    } catch (e) {
        res.status(500);
        res.send(e.message);
    }
};
//Insert news likes
export const getNewsLikes = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM personxnews WHERE news_id = ? AND person_id = ? ", [req.params.id, req.params.id2]);
        res.json(rows);
    } catch (e) {
        res.status(500);
        res.send(e.message);
    }
};



