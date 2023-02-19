const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../data");

const products = readJSON("productsDataBase.json");


module.exports = {
    create: (req, res) => {
        res.render("admin/createProduct")
    },
       // let newProduct ={
		//	id:lastId+1,
		//	name:req.body.productName,
		//	price:req.body.productPrice,
		//	category:req.body.productCategory,
		//	description:req.body.productDescription,
          //  image:req.body.productPhoto,
		//}
       
       

    store: (req, res) => {
        let lastId = products [products.length -1].id;
		let newProduct ={
			id:lastId+1,
			name:req.body.productName,
			price:req.body.productPrice,
			category:req.body.productCategory,
			description:req.body.productDescription,
            image:req.body.productPhoto,
		}
		products.push(newProduct);
		writeJSON("productsDataBase.json")
    },

    edit: (req, res) => {
		let productId = Number(req.params.id);
		let productToEdit = products.find(product => product.id === productId);

        if(productToEdit){
            res.render("admin/editProduct", {
                productToEdit, 
            })
        } else{
            res.send("No se encontro el producto");
        }
	},
    update: (req, res) => {
        let productId = Number(req.params.id);
        let productToEdit = products.find(product => product.id == productId);
        productToEdit.id = productId;
        productToEdit.name = req.body.name;
        productToEdit.price = req.body.price;
        productToEdit.discount = req.body.discount;
        productToEdit.category = req.body.category;
        productToEdit.subCategory = req.body.subCategory;
        productToEdit.description = req.body.description;
        productToEdit.image = req.file ? req.file.filename : null,
        
        writeJSON("productsDataBase.json");
        res.redirect("/admin/adminPerfil");



	},
    
    admin: (req, res) =>{
        res.render("./admin/adminPerfil")
    },

    editRender: (req, res) =>{
        res.render("./admin/adminPerfilEdit")
    },

    editAdmin: (req, res) =>{
        res.render("./admin/adminPerfilEdit")
    },

    adminUsersRegister: (req, res) =>{
        res.render("./admin/adminPerfilUsers")
    },

    adminUsersQuestions: (req, res) =>{
        res.render("./admin/adminPerfilQuestions")
    },

    adminUsersShipments: (req, res) =>{
        res.render("./admin/adminPerfilShipments")
    },

    adminPerfilReturnedPackages: (req, res) =>{
        res.render("./admin/adminPerfilReturnedPackages")
    },

    adminPerfilClaims: (req, res) =>{
        res.render("./admin/adminPerfilClaims")
    },
}