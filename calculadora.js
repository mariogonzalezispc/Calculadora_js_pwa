function abre_calculadora() {
    console.log("Hola calculadora de mario y monica ");

try {
/*-----------------------------------------------------------------*/
/* Creamos div de fondo de la calculadora e insertamos en el DOM   */
/*-----------------------------------------------------------------*/
const fondo = document.createElement('div');
fondo.id = 'fondo';
fondo.className = 'calculadora';
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
"position: absolute;"+
"top: 4%;"+
"left: 4%;"+
"width: 91%;"+
"height: 15%;"+
"align-items: right;"+
"background-color: orangered;"+
"border-radius: 10px;"+
"border: 2px solid black;";











display.setAttribute('style',parametros2);
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
digito1.id = 'digito1';
digito1.className = 'botones';
let parametros5 =
"position: absolute;"+
"top: 1%;"+
"left: 1.4%;"+
"width: 23%;"+
"height: 19%;"+
"align-items: right;"+
"background-color: grey;"+
"box-shadow: 5px 5px 10px -3px #00000040, -5px -5px 15px 3px #00ffc11f;"+
"border-radius: 32px;";
digito1.setAttribute('style',parametros5);//carga los estilos del boton
digito1.innerHTML = '1';//carga el texto del boton
digito1.onclick = function() {
    digitos.value += '1';
}






teclado.appendChild(digito1);//este inserta el display en el body del HTML 
console.log("La tecla digito1 esta cargada en el DOM " + digito1.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
const label1 = document.createElement('label');
label1.id = 'label1';
label1.className = 'label1';
let parametros5label =
"position: absolute;"+
"top: 0%;"+
"left: 0%;"+
"width: 100%;"+
"height: 100%;"+
"user-select: none;"+
"align-items: center;"+
"font-size: 40px;"+
"text-align: center;"+
"line-height: 75px;"+
"font-weight: bold;"+
"justify-content: center;"+
"background-color: transparent;";
label1.setAttribute('style',parametros5label);//carga los estilos del label
label1.innerHTML = "1";
digito1.appendChild(label1);//este inserta el display en el body del HTML 
console.log("La tecla label1 esta cargada en el DOM " + label1.isConnected); // retorna el estado del display en el DOM

/*-----------------------------------------------------------------*/
} catch (error) {
    alert("Error al cargar la calculadora " + error);
    
}
}

function add_number(numero) {
    console.log("Hola soy el boton "+ numero);
}