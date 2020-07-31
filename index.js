//VARIABLES GLOBALEs
const express = require('express')
const usuarios = require('./db/database')
const app = express()

//MIDDLEWARES
app.use(express.json())
app.use(express.static('public'))

function verificarUsuarioLoggeado(req, res, next){
    let idUsuario = req.header['Authorization']
}

//ENDPOINTS
app.post('/verificacion', (req, res)=>{
    let nombre = req.body.nombre
    let clave = req.body.clave
    let resultado = usuarios.verificar(nombre, clave)
    if(resultado != null){
        console.log('verificado')
        res.status(200).json(resultado)
    } else{ 
        res.status(404).send('usuario no encontrado')
    }
})

app.get('/usuarios', (req, res)=>{
    req.header['Authorization']
    res.status(200).json(usuarios.usuarios)
})


//INITIALAZE SERVER
app.listen(3000, ()=>{
    console.log('Servidor iniciado')
})