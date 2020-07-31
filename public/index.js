
const formulario = document.getElementById('signIn')

formulario.onsubmit = (e)=>{
    let nombre = formulario.elements['nombre'].value
    let clave = formulario.elements['clave'].value
    let usuario = {
        nombre,
        clave
    }
    e.preventDefault()
    traeApi(usuario)
}

async function traeApi(usuario){
    try {
        const result = await fetch('http://localhost:3000/verificacion', {method:'POST', headers:{'Accept': 'application/json','Content-Type': 'application/json'}, body:JSON.stringify(usuario)})
        if(result.status == 200){
            document.location.href = '/main.html'
            let json = await result.json()
            sessionStorage.setItem('nombre', json.nombre)
        }else{
            alert('Usuario incorrecto')
        }
    } catch (error) {
        
    }
}