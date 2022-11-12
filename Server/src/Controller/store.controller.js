
import {db} from "../database.js"

const getProductItems = async (req, res) =>{
    try{
        const result = await db.query("SELECT * FROM product");
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
}; 

export default{
    getProductItems  
}