import {db} from "../database.js"

const getGenders = async (req, res) =>{
    try{
        const result = await db.query("SELECT gender_id, description FROM gender");
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

const getUniversities = async (req, res) =>{
    try{
        const result = await db.query("SELECT university_id, name, acronym FROM university");
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};

const getProvinces = async (req, res) =>{
    try{
        const result = await db.query("SELECT province_id, province_name FROM province");
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};

const getCantons = async (req, res) =>{
    try{
        const result = await db.query("SELECT * FROM canton");
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};

const getDistrics = async (req, res) =>{
    try{
        const result = await db.query("SELECT * FROM distric");
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

const getNewsType = async (req, res) =>{
    try{
        const [rows] = await db.query("SELECT * FROM news_type");
        res.json(rows);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};

export default{
    getGenders, getUniversities, getProvinces, getCantons,
    getDistrics, createGender, getNewsType
}