
import {db} from "../database.js"
//Pestaña de canje
//Obtiene todos lo productos que existen en la base de datos
const getProductItems = async (req, res) =>{
    try{
        const result = await db.query('SELECT * FROM product');
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};

//Obtenga la cantidad de productos que queden (Atributo cantidad)
/*const getCantidadProduct = async (req, res) =>{
    try{
        const id = req.params.product_id;
        const result = await db.query('SELECT cuantity FROM product WHERE id_product = ?', [req.body, id]);
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};*/

//Altere la cantidad de productos que queden (Atributo cantidad)
const updateCantidadProduct = async (req, res) =>{
    try{
        const id = req.params.product_id;
        const c = req.params.cuantity;
        const result = await db.query('UPDATE product SET cuantity = ? WHERE id_product = ?', [req.body,c, id]);
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};

//Borre productos de la base de datos
/*const deleteProduct = async (req, res) =>{
    try{
        const id = req.params.product_id;
        const result = await db.query('DELETE FROM product WHERE id_product = ?', [req.body, id]);
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};*/
//Obtenga todos los productos asignados a una persona
//*Confirmar si sirve*
const getProductsBought = async (req, res) =>{
    const id = req.params.person_id;
    try{
        const result = await db.query('SELECT name, description, photo FROM product as p left join personxproduct as pp on p.product_id = pp.product_id WHERE person_id = ?', [id]);
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};

//Asigne un producto a una persona
const newRelationship = async (req, res) =>{
    try{
        const info = req.body;

        console.log(info)
        const result = await db.query('INSERT INTO personxproduct set ?', [info]);
        res.json(result);
    }catch(e){
        console.log(e)
        res.status(500);
        res.send(e.message);
    }
};




//Inserte un producto nuevo
const newProduct = async (req, res) =>{
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
        const result = await db.query('INSERT INTO product set ?', [info]);
        res.json(result);
    }catch(e){
        console.log(e)
        res.status(500);
        res.send(e.message);
    }
};

//Actualice un producto existente
const updateProduct = async (req, res) =>{
    //console.log("Funciona :)");
    try{
        const id = req.params.product_id;
        const product = req.body;
        //console.log(id, product);
        const result = await db.query('UPDATE product SET ? WHERE product_id = ?', [product, id]);
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};

//Obtener producto por ID
const getProductByID = async (req, res) =>{
    console.log("Funciona");
    try{
        const id = req.params.product_id;
        const result = await db.query('SELECT name, description, cost FROM product WHERE product_id = ?', [id]);
        res.json(result);
    }catch(e){
        res.status(500);
        res.send(e.message);
    }
};
export default{
    getProductItems, updateCantidadProduct, newProduct, updateProduct,getProductsBought,
    getProductByID, newRelationship
}