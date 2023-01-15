let ataqueJugador
let ataqueEnemigo 
let vidasJugador=3
let vidasEnemigo=3

function iniciarjuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let botonReiniciar= document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click",reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let imputgagumon = document.getElementById("gagumon")
    let imputstaryul=document.getElementById("staryul")
    let immputvolvasurl=document.getElementById("volvasurl")
    let spanMacostaJugador=document.getElementById("mascota-jugador")
    
    if(imputgagumon.checked) {
       spanMacostaJugador.innerHTML = "gagumon"
    }   else if(imputstaryul.checked){
        spanMacostaJugador.innerHTML= "staryul"
    }   else if(immputvolvasurl.checked){
        spanMacostaJugador.innerHTML= "volvasurl"
    }   else{
        alert("selccciona una mascota")
    }
    seleccionarMascotaEnemigo()
}  

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    if( mascotaAleatoria==1){
        spanMascotaEnemigo.innerHTML ="gagumon"
    }else if (mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML="staryul"
    }else {
        spanMascotaEnemigo.innerHTML="volvasurl"
    }
}

function ataqueFuego(){
    ataqueJugador="FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador="AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador="TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio =aleatorio(1,3)
    if (ataqueAleatorio==1){
        ataqueEnemigo="FUEGO"
    }else if(ataqueAleatorio==2){
        ataqueEnemigo="AGUA"
    }else {
        ataqueEnemigo="TIERRA"
    }
    combate()
}

function combate(){
    let spanVidasJugador=document.getElementById("vidas-jugador")
    let spanVidasEnemigo=document.getElementById("vidas-enemigos")

    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("empate")
    }else if(ataqueJugador=="FUEGO" && ataqueEnemigo=="TIERRA"){
        crearMensaje("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador=="AGUA" && ataqueEnemigo=="FUEGO"){
        crearMensaje("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if (ataqueJugador=="TIERRA" && ataqueEnemigo=="AGUA"){
        crearMensaje("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("perdiste")
        vidasJugador=vidasJugador- 1
        spanVidasJugador.innerHTML= vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo==0){
        crearMensajeFinal("FELICIDADES GANASTE 🥳")
    } else if (vidasJugador==0){
        crearMensajeFinal("MIS CONDONLENCIAS PERDISTE 😣")
    }
}
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes=document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML= resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true 
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled=true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled=true
}
function crearMensaje(resultado){
    let sectionMensajes=document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML= "tu mascota ataco con " + ataqueJugador + " la mascota del enemigo ataco con " + ataqueEnemigo + "-" + resultado
    sectionMensajes.appendChild(parrafo)
}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", iniciarjuego)

