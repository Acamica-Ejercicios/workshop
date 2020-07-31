
async function init(){
    const result = await fetch('http://localhost:3000/usuarios')
    let json = await result.json()
    console.log(json)
}

init()