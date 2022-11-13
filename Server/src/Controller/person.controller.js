
import {db} from "../database.js"
import {uploadImage} from "../libs/cloudinary.js";
import fs from "fs-extra";

const getPersons = async (req, res) =>{
    try{
        const result = await db.query("SELECT * FROM person");
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

const updatePerson = async (req, res) =>{
    // console.log(`${req.params.person_id}`);
    // console.log(req.body);
    try{
        const id = req.params.person_id;
        const result = await db.query('UPDATE person set ? WHERE id_person = ?', [req.body, id]);
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};

const login = async (req, res) =>{
    try{
        const email = req.query.email;
        const password = req.query.password;
        const result = await db.query('SELECT * FROM person WHERE email = ? AND password = ?', [email, password]);
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};

const newPerson = async (req, res) =>{
    try{
        const info = req.body;
        let image = null;
        console.log(info)
        if (req.files.image){
            console.log("IMAGEN")
            const result = await uploadImage(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath)
            image = result.secure_url
        } else {
            console.log("MAMANDO")
        }


        info.photo = image;
        console.log(info)
        const result = await db.query('INSERT INTO person set ?', [info]);
        res.json(result);
    }catch(e){
        console.log(e)
        res.status(500);
        res.send(e.message);
    }
};

export default{
    updatePerson, getPersons, login, newPerson
}