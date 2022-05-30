function abre_calculadora() {
    console.log("Hola calculadora de mario y monica ");

try {
/*-----------------------------------------------------------------*/
/* Creamos div de fondo de la calculadora e insertamos en el DOM   */
/*-----------------------------------------------------------------*/
const fondo = document.createElement('div');
fondo.id = 'fondo';
fondo.className = 'calculadora';
//fondo.setAttribute('style','position: absolute;top: 5%;left: 2%;width: 95%;height: 85%;align-items: center;background-color: crimson; border-radius: 10px; border: 2px solid black; justify-content: center;');
let parametros = 
    "position: absolute;"+
    "top: 5%;"+
    "left: 2%;"+
    "width: 95%;"+
    "height: 85%;"+
    "align-items: center;"+
    "background-color: crimson;"+
    "border-radius: 10px;"+
    "border: 2px solid black;"+
    "justify-content: center;";
fondo.setAttribute('style',parametros);
document.body.appendChild(fondo);//este inserta el div en el body del HTML 
console.log("El fondo esta cargado en el DOM " + fondo.isConnected); // retorna el estado del div en el DOM
/*-----------------------------------------------------------------*/
/* Creamos div de display de la calculadora e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const display = document.createElement('div');
display.id = 'display';
display.className = 'display';
let parametros2 =
display.setAttribute('style','position: absolute;top: 4%;left: 4%;width: 91%;height: 15%;align-items: right;background-color: orangered; border-radius: 10px; border: 2px solid black;');
fondo.appendChild(display);//este inserta el display en el body del HTML 
console.log("El display esta cargado en el DOM " + display.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos div del teclado de la calculadora e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const teclado = document.createElement('div');
teclado.id = 'teclado';
teclado.className = 'teclado';
let parametros3 =
teclado.setAttribute('style','position: absolute;top: 22%;left: 4%;width: 91%;height: 74%;align-items: center; background-color: pink; border-radius: 10px; border: 2px solid black;');
fondo.appendChild(teclado);//este inserta el display en el body del HTML 
console.log("El teclado esta cargado en el DOM " + teclado.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos input digitos del display e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const digitos = document.createElement('input');
digitos.id = 'digitos';
digitos.className = 'teclado';
let parametros4 =
digitos.setAttribute('style','position: absolute;top: 3%;left: 1.4%;width: 95%;height: 85%;align-items: right;background-color: grey;border-radius: 10px;');
display.appendChild(digitos);//este inserta el display en el body del HTML 
console.log("El digito esta cargado en el DOM " + digitos.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos tecla digito1 del teclado e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const digito1 = document.createElement('button');
digito1.id = 'digitos';
digito1.className = 'teclado';
let parametros5 =
digito1.setAttribute('style','position: absolute;top: 3%;left: 1.4%;width: 25%;height: 20%;align-items: right;background-color: grey;border-radius: 10px;');
teclado.appendChild(digito1);//este inserta el display en el body del HTML 
console.log("La tecla digito1 esta cargada en el DOM " + digito1.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/



/*-----------------------------------------------------------------*/
} catch (error) {
    alert("Error al cargar la calculadora " + error);
    
}
}

