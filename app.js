require('dotenv').config();
const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json())


app.get("/", (req, res) =>{
    res.send("Hola mundo")
});

// ENDPOINTS USUARIOS

app.get("/usuarios", async(req,res)=>{
    const usuarios = await prisma.user.findMany()
    res.json(usuarios)
})
 
app.post("/crearUsuario", async(req, res) =>{
    const {nombre, correo, contrasena} = req.body
    const result = await prisma.user.create({
        data:{
            nombre,
            correo,
            contrasena
        }
    })
    res.json(result)
});

app.put("/usuario/:id", async(req, res) =>{
    const {id} = req.params
    const {nombre, correo, contrasena} = req.body
    const user = await prisma.user.update({
        where: {id: Number(id)},
        data:{
            nombre,
            correo,
            contrasena
        }
    })
    res.json(user)
});

app.delete("/usuario/:id", async(req, res) =>{
    const {id} = req.params
    const user = await prisma.user.delete({
        where: {id: Number(id)}
    })
    res.json("Eliminado correctamente")
});

app.listen(3000, ()=>{
    console.log("Servidor corriendo en http://localhost:3000")
}); 