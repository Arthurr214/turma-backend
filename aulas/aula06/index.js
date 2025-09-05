// 1. Importar o framework
const express = require("express");

// 2. criar uma instancia da aplicação 
const app = express();

// criar um middleware 
app.get("/", (req,res) => {
    res.send("Ola");
})

// 3. iniciar a aplicação em uma porta
app.listen(3000, ()=>{
    console.log("app esta on");
})