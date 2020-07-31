var usuarios = [
    {
        id: 1,
        nombre: "Rodri",
        clave: "constratrucha"
    }
]

function verificar(nombre, clave){
    for (let i = 0; i < usuarios.length; i++) {
        if((usuarios[i].nombre == nombre)&&(usuarios[i].clave == clave)){
            return usuarios[i]
        }
    }
    return null
}

function verificarPorNombre(nombre){
    
}

module.exports = {
    usuarios,
    verificar: verificar
}