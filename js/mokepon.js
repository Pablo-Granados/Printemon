const divMensajeFinal = document.getElementById("mensajeFinal")
const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionEligeTuAtaque = document.getElementById("elige-tu-ataque")

const divResultado = document.getElementById("resultado")
const divVersus = document.getElementById("versus")
const botonMascotaJugador = document.getElementById('boton-mascota')

const botonReiniciar = document.getElementById("boton-revancha")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanImagenJugador = document.getElementById('imagen-jugador')
let selectedId
let imagenSelected
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanImagenEnemigo = document.getElementById("imagen-enemigo")
let selectedenemy
let imagenSelectedEne

const spanVictoriasJugador = document.getElementById("vidas-jugador")
const spanVictoriasEnemigo = document.getElementById("vidas-enemigo")

const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let mokepones = []
let ataqueJugador = [] 
let jugadaJugador
let ataquesMokeponEnemigo = []
let ataqueEnemigo = []
let jugadaEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let mascotaJugador
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones = []
let ataqueAleatorio
let ataqueAleatorio1
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataquesDeTodos
let arrayAtaques = []
let victoriasJugador = 0
let victoriasEnemigo = 0
//let lienzo = mapa.getContext("2d")

class Mokepon {
    constructor(nombre, imagen, vida) {
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
    }
}

let Miutu = new Mokepon("Miutu","./imagenes/pokemon-17.svg",5)
let Pichoto = new Mokepon("Pichoto","./imagenes/pidgeot-seeklogo.com.svg",5)
let Persian = new Mokepon("Persian","./imagenes/pokemon-5.svg",5)
let Charizardo = new Mokepon("Charizardo","./imagenes/charizard-logo-C9856A6142-seeklogo.com.png",5)
let Buterflai = new Mokepon("Buterflai","./imagenes/butterfree-seeklogo.com.svg",5)
let Picatwo = new Mokepon("Picatwo","./imagenes/dragonair-logo-D994877077-seeklogo.com.png",5)

Miutu.ataques.push(
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pok??mon_Water_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pok??mon_Water_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pok??mon_Water_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pok??mon_Fire_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pok??mon_Ground_Type_Icon.svg.png"},
)

Pichoto.ataques.push(
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pok??mon_Ground_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pok??mon_Ground_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pok??mon_Ground_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pok??mon_Water_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pok??mon_Fire_Type_Icon.svg.png"},
)

Persian.ataques.push(
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pok??mon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pok??mon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pok??mon_Fire_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pok??mon_Water_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pok??mon_Ground_Type_Icon.svg.png"},
)

Charizardo.ataques.push(
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pok??mon_Water_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pok??mon_Water_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pok??mon_Water_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pok??mon_Fire_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pok??mon_Ground_Type_Icon.svg.png"},
)

Buterflai.ataques.push(
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pok??mon_Ground_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pok??mon_Ground_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pok??mon_Ground_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pok??mon_Water_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pok??mon_Fire_Type_Icon.svg.png"},
)

Picatwo.ataques.push(
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pok??mon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pok??mon_Fire_Type_Icon.svg.png"},
    { nombre: 'Fuego', id: 'boton-fuego', img: "./imagenes/1200px-Pok??mon_Fire_Type_Icon.svg.png"},
    { nombre: 'Agua', id: 'boton-agua', img: "./imagenes/1024px-Pok??mon_Water_Type_Icon.svg.png"},
    { nombre: 'Tierra', id: 'boton-tierra', img: "./imagenes/1200px-Pok??mon_Ground_Type_Icon.svg.png"},
)

mokepones.push(Miutu,Pichoto,Persian,Charizardo,Buterflai,Picatwo)

function iniciarJuego() {
    
    
    divMensajeFinal.style.display = "none"
    sectionVerMapa.style.display = "none"
    sectionReiniciar.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    divResultado.style.display = "none"

    mokepones.forEach((mokepon) => {
        let htmlPoderes = ""
        mokepon.ataques.forEach((poder) => {
            htmlPoderes += `<img class="poderes" src=${poder.img}>`
        })
        
        opcionDeMokepones = `<Label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
        <input type="radio" name="mascota" id=${mokepon.nombre} data-img="${mokepon.imagen}" />
        ${mokepon.nombre}
        <img class="elegir" src=${mokepon.imagen} alt=${mokepon.nombre}>
        <div class="div-poderes">
            ${htmlPoderes}
        </div>
        </Label>
        `
        
        console.log(mokepon.ataques)
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById("Miutu")
        inputCapipepo = document.getElementById("Pichoto")
        inputRatigueya = document.getElementById("Persian")
        inputLangostelvis = document.getElementById("Charizardo")
        inputTucapalma = document.getElementById("Buterflai")
        inputPydos = document.getElementById("Picatwo")
          
    })

    // <img class="poderes" src=${mokepon.ataques[0].img}><img class="poderes" src=${bueno.img}><img class="poderes" src=${mokepon.ataques[2].img}><img class="poderes" src=${mokepon.ataques[3].img}><img class="poderes" src=${mokepon.ataques[4].img}></img>

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    if(inputHipodoge.checked) {
        selectedId = inputHipodoge.id
        imagenSelected = inputHipodoge.dataset.img

    } else if(inputCapipepo.checked) {
        selectedId = inputCapipepo.id
        imagenSelected = inputCapipepo.dataset.img
        
    } else if(inputRatigueya.checked) {
        selectedId = inputRatigueya.id
        imagenSelected = inputRatigueya.dataset.img

    } else if(inputLangostelvis.checked) {
        selectedId = inputLangostelvis.id
        imagenSelected = inputLangostelvis.dataset.img

    } else if(inputTucapalma.checked) {
        selectedId = inputTucapalma.id
        imagenSelected = inputTucapalma.dataset.img

    } else if(inputPydos.checked) {
        selectedId = inputPydos.id
        imagenSelected = inputPydos.dataset.img

    } else {
        alert("Debes seleccionar un MOKEPON")
        location.reload()
    }

    if (selectedId) {
        spanMascotaJugador.innerHTML = selectedId 
        spanImagenJugador.innerHTML = `<img class="imagen-selected" src="${imagenSelected}" alt="${selectedId}">`
    } 

    sectionSeleccionarAtaque.style.display = "flex"
    
    // sectionVerMapa.style.display = "flex"
    // let imagenDeCapipepo = new Image()
    // imagenDeCapipepo.src = Pichoto.imagen
    // lienzo.drawImage(
    //      imagenDeCapipepo,
    //      20,
    //      40,
    //      100,
    //      100
    // )
    
    sectionSeleccionarMascota.style.display = "none"

    extraerAtaques(selectedId)
    seleccionarMascotaEnemigo()

    document.querySelector(".cuadro2").scrollIntoView({behavior:"smooth"});
    
}

function extraerAtaques(selectedId){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (selectedId === mokepones[i].nombre) {
        ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
    
}


function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {

    ataquesMokepon = `
        <button data-id="${ataque.id}" class="boton-ataque BAtaque">${ataque.nombre}
        <img class="img-ataque" src="${ataque.img}"}>
        </button>
        `

        contenedorAtaques.innerHTML += ataquesMokepon
        
    })
    
    botonFuego = document.getElementById('boton-fuego') 
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
    
}

function atacar(e) {
    const boton = e.currentTarget;

    if (boton.dataset.id === 'boton-fuego') {
        ataqueJugador.push("FUEGO")
        jugadaJugador = "FUEGO"
        console.log(ataqueJugador)
        spanImagenAtaqueJugador = '<img id="boton-fuego" src="./imagenes/1200px-Pok??mon_Fire_Type_Icon.svg.png" class="Fuego">'
        
        
    } else if(boton.dataset.id === 'boton-agua') {
        ataqueJugador.push("AGUA")
        console.log(ataqueJugador)
        jugadaJugador = "AGUA"
        spanImagenAtaqueJugador = '<img id="boton-agua" src="./imagenes/1024px-Pok??mon_Water_Type_Icon.svg.png" class="Agua">'

    } else {
        ataqueJugador.push("TIERRA")
        console.log(ataqueJugador)
        jugadaJugador = "TIERRA"
        spanImagenAtaqueJugador = '<img id="boton-tierra" src="./imagenes/1200px-Pok??mon_Ground_Type_Icon.svg.png" class="Tierra"></img>'

    }
    ataqueAleatorioEnemigo()
    //boton.style.background = '#3D3837'
    boton.disabled = true
    boton.removeEventListener('click', atacar)
}
    
function secuenciaAtaque() {

    botones.forEach((boton) =>{
        boton.addEventListener('click', atacar)
    })  
}

function seleccionarMascotaEnemigo(){
    ataqueAleatorio = aleatorio(0, mokepones.length-1)
    
    
    spanMascotaEnemigo.innerHTML = mokepones[ataqueAleatorio].nombre
    spanImagenEnemigo.innerHTML = `<img class="imagen-selected" src="${mokepones[ataqueAleatorio].imagen}" alt="${mokepones[ataqueAleatorio].nombre}">`  
    ataquesMokeponEnemigo = mokepones[ataqueAleatorio].ataques
    secuenciaAtaque()
    
}
    
function ataqueAleatorioEnemigo(){
    ataqueAleatorio1 = aleatorio(0,ataquesMokeponEnemigo.length -1)

    if (ataquesMokeponEnemigo[ataqueAleatorio1].nombre === "Fuego"){
        ataqueEnemigo.push("FUEGO")
        jugadaEnemigo = "FUEGO"
        spanImagenAtaqueEnemigo = `<img id="${ataquesMokeponEnemigo[ataqueAleatorio1].id}" src="./imagenes/1200px-Pok??mon_Fire_Type_Icon.svg.png" class="Fuego">`
    }

    else if (ataquesMokeponEnemigo[ataqueAleatorio1].nombre === "Agua"){
        ataqueEnemigo.push("AGUA")
        jugadaEnemigo = "AGUA"
        spanImagenAtaqueEnemigo = `<img id="${ataquesMokeponEnemigo[ataqueAleatorio1].id}" src="./imagenes/1024px-Pok??mon_Water_Type_Icon.svg.png" class="Agua">`
    }

     else if (ataquesMokeponEnemigo[ataqueAleatorio1].nombre === "Tierra") {
        ataqueEnemigo.push("TIERRA")
        jugadaEnemigo = "TIERRA"
        spanImagenAtaqueEnemigo = `<img id="${ataquesMokeponEnemigo[ataqueAleatorio1].id}" src="./imagenes/1200px-Pok??mon_Ground_Type_Icon.svg.png" class="Tierra"></img>`
    }
    
    console.log(ataqueEnemigo)
    ataquesMokeponEnemigo.splice([ataqueAleatorio1],1)

    divResultado.style.display = "flex"
    divVersus.style.display = "none"

    pelea()
}

function iniciarpelea() {
       if (ataqueJugador.length === 5) {
           pelea()
       }
    
    }

function pelea(){

        if(jugadaJugador === jugadaEnemigo) {
            // indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")   

        } else if(jugadaJugador === "FUEGO" && jugadaEnemigo === "TIERRA" || jugadaJugador === "AGUA" && jugadaEnemigo === "FUEGO" || jugadaJugador === "TIERRA" && jugadaEnemigo ==="AGUA" ){
        crearMensaje("GANASTE") 
        victoriasJugador++
        //spanVidasEnemigo.innerHTML = vidasEnemigo
        spanVictoriasJugador.innerHTML = victoriasJugador


        } else {
        crearMensaje("PERDISTE") 
        
        victoriasEnemigo++ //Es lo mismo que vidasJugador-= 1 o vidasJugador--
        spanVictoriasEnemigo.innerHTML = victoriasEnemigo
        }
    
    document.querySelector("#resultado").scrollIntoView({behavior:"smooth"});

    revisarvidas()
}
    
function revisarvidas(){

    if(victoriasJugador === 3){
        mensajeFinal('FELICITACIONES, ERES EL NUEVO GANADOR! ????')
        
    } else if (victoriasEnemigo === 3) {
        mensajeFinal('PERDISTE, ??? JUEGA DE NUEVO')
    
    } else if(ataqueJugador.length > 4) {
        
        if (victoriasJugador > victoriasEnemigo) {
            mensajeFinal('FELICITACIONES, ERES EL NUEVO GANADOR! ????')
            
        } else if (victoriasEnemigo > victoriasJugador) {
            mensajeFinal('PERDISTE, ??? JUEGA DE NUEVO!')
        
        } else {
        mensajeFinal('EMPATE? PRUEBA OTRA VEZ!')
        }
    }
}
function crearMensaje(resultadojuego){

    let parrafo = document.createElement("div")
    parrafo.innerHTML = resultadojuego   
    divResultado.appendChild(parrafo)

    let imagenataqueJugador = document.getElementById("img-ataque-jugador")
    let parrafo1 = document.createElement("div")
    parrafo1.innerHTML = spanImagenAtaqueJugador   
    imagenataqueJugador.appendChild(parrafo1)

    let imagenataqueEnemigo = document.getElementById("img-ataque-enemigo")
    let parrafo2 = document.createElement("div")
    parrafo2.innerHTML = spanImagenAtaqueEnemigo   
    imagenataqueEnemigo.appendChild(parrafo2)

}

function mensajeFinal(resultadoFinal){

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal  
    
    divMensajeFinal.appendChild(parrafo)

    // function deshabilitarBoton(btn) {
    //     btn.disabled = true 
    // }

//    botones.forEach(deshabilitarBoton)

    sectionEligeTuAtaque.style.display = "none"
    sectionReiniciar.style.display = "block"
    divMensajeFinal.style.display = "flex"

    document.querySelector("#mensajeFinal").scrollIntoView({behavior:"smooth"});

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)+ min)
}

window.addEventListener('load', iniciarJuego)

