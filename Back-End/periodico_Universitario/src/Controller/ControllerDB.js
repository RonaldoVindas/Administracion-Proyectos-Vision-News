import {db} from "../DateBase/DataBase.js"

const getGender = async (req, res) =>{
    try{
        const result = await db.query("SELECT * FROM gender");
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

const createGender = async (req, res) =>{
    try{
        const {gender_id, description} = req.body;
        const result = await db.query('INSERT INTO gender SET ?', [req.body]);
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

export default{
    getGender,
    createGender
}