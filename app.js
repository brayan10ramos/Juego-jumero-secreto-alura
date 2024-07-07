let numerSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;
//console.log (numerSecreto);

function AsignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarintento() {
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
    console.log (intentos);
    /* 
    console.log (numeroDeUsuario);
    console.log (typeof(numeroDeUsuario));// si el dato es string o number
    console.log (numerSecreto);
    console.log (typeof(numerSecreto));// si el dato es string o number
    console.log (numeroDeUsuario === numerSecreto);
    */
    
   if (numeroDeUsuario === numerSecreto) {
    AsignarTextoElemento ('p', 'Acertastes el numero en '+intentos+ (+intentos === 1 ? ' vez' : ' veces') );
    document.getElementById('reiniciar').removeAttribute('disabled'); 

   }else{
    // el suario no acerto
    if (numeroDeUsuario > numerSecreto) {
        AsignarTextoElemento ('p','El numero secreto es menor');
    }else{
        AsignarTextoElemento ('p','El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja('');
    
   }


    return;
}

function limpiarCaja () {
    document.getElementById('valorUsuario').value = '';
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumeroSorteado);
    //si ya se sortearon todos los numeros 
    if (listaNumeroSorteado.length == numeroMaximo) {
        AsignarTextoElemento ('p','Ya se sortearon todos los numero posibles ');
                
    }else{
        //Si el numero generado esta iclido en la lista 
    if (listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
    }


    

}
function condicionesIniciales() {
    AsignarTextoElemento('h1','Juego del numero secreto');
    AsignarTextoElemento('p','Indica un número del 1 al ' +numeroMaximo);
    numerSecreto = generarNumeroSecreto();
    intentos = 1;

    
}

function reiniciarJuego() {

    // limpiar caja
    limpiarCaja();
     
    //generar el numero aleatorio
    //inicializar el numero de intentos
    //indicar mesaje de inventario de numero
    condicionesIniciales();
   
    //desabilitar el boton de nuevo juego dos opciones 
    document.getElementById('reiniciar').setAttribute('disabled','true');
    //document.querySelector('#reiniciar').setAttribute('disabled','true')
     
     
    
}
condicionesIniciales();



