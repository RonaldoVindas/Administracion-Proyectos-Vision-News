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
        const provinceId = req.query.provinceId;
        const result = await db.query("SELECT canton_id, canton_name FROM canton WHERE provice_ID = ?",[provinceId]);
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};

const getDistricts = async (req, res) =>{
    try{
        const cantonId = req.query.cantonId;
        const result = await db.query("SELECT distric_id, distric_name FROM distric WHERE canton_ID = ?",[cantonId]);
        res.json(result);
    }catch(e){
        res.status(500);
        console.log(e)
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
    getDistricts, createGender, getNewsType
}