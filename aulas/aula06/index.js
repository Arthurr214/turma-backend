// 1. Importar o framework
const express = require("express");
//importar ,iddleware de terceiros
const cors = require

// 2. criar uma instancia da aplicação 
const app = express();

// criar um middleware 
app.get("/", (req,res) => {
    res.send("Ola");
})

// middleware de aplicação
app.use((req, res, next ) => {
    console.log("Passei pelo middleware de app");
    next();
})



app.use('/tarefas', router);


// middleware de erro
app.use((err, req, res, next) => {
   res.status(500).send(err.message);
});

// 3. iniciar a aplicação em uma porta
app.listen(3000, ()=>{
    console.log("app esta on");
})