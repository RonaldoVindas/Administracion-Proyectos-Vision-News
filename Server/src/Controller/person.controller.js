
import {db} from "../database.js"

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

export default{
    updatePerson, getPersons, login
}