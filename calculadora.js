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
    "position: absolute;"+
    "top: 22%;"+
    "left: 4%;"+
    "width: 91%;"+
    "height: 74%;"+
    "align-items: center;"+ 
    "background-color: pink;"+ 
    "border-radius: 10px;"+ 
    "border: 2px solid black;";
teclado.setAttribute('style',parametros3);
fondo.appendChild(teclado);//este inserta el display en el body del HTML 
console.log("El teclado esta cargado en el DOM " + teclado.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos input digitos del display e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const digitos = document.createElement('input');
digitos.id = 'digitos';
digitos.className = 'teclado';
let parametros4 =
    "position: absolute;"+
    "top: 3%;"+
    "left: 1.4%;"+
    "width: 95%;"+
    "height: 85%;"+
    "user-select: none;"+
    "align-items: right;"+
    "font-size: 40px;"+
    "text-align: right;"+
    "line-height: 75px;"+
    "font-weight: bold;"+
    "background-color: grey;"+
    "border-radius: 10px;";
digitos.setAttribute('style',parametros4);
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
    "box-shadow: 5px 5px 10px -3px;"+
    "border-radius: 15px;";
digito1.setAttribute('style',parametros5);//carga los estilos del boton
//digito1.innerHTML = '1';//carga el texto del boton
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
    "line-height: 60px;"+
    "font-weight: bold;"+
    "justify-content: center;"+
    "background-color: transparent;";
label1.setAttribute('style',parametros5label);//carga los estilos del label
label1.innerHTML = "1";
digito1.appendChild(label1);//este inserta el display en el body del HTML 
console.log("La tecla label1 esta cargada en el DOM " + label1.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos tecla digito2 del teclado e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const digito2 = document.createElement('button');
digito2.id = 'digito2';
digito2.className = 'botones';
let parametros6 =
    "position: absolute;"+
    "top: 1%;"+
    "left: 25%;"+
    "width: 23%;"+
    "height: 19%;"+
    "align-items: right;"+
    "background-color: grey;"+
"box-shadow: 5px 5px 10px -3px;"+
"border-radius: 15px;";
digito2.setAttribute('style',parametros6);//carga los estilos del boton
//digito2.innerHTML = '2';//carga el texto del boton
digito2.onclick = function() {
    digitos.value += '2';
}

teclado.appendChild(digito2);//este inserta el display en el body del HTML 
console.log("La tecla digito2 esta cargada en el DOM " + digito2.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
const label2 = document.createElement('label');
label2.id = 'label2';
label2.className = 'label2';
let parametros6label =
    "position: absolute;"+
    "top: 0%;"+
    "left: 0%;"+
    "width: 100%;"+
    "height: 100%;"+
    "user-select: none;"+
    "align-items: center;"+
    "font-size: 40px;"+
    "text-align: center;"+
    "line-height: 60px;"+
    "font-weight: bold;"+
    "justify-content: center;"+
    "background-color: transparent;";
label2.setAttribute('style',parametros6label);//carga los estilos del label
label2.innerHTML = "2";
digito2.appendChild(label2);//este inserta el display en el body del HTML 
console.log("La tecla label2 esta cargada en el DOM " + label2.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos tecla digito3 del teclado e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const digito3 = document.createElement('button');
digito3.id = 'digito3';
digito3.className = 'botones';
let parametros7 =
    "position: absolute;"+
    "top: 1%;"+
    "left: 49%;"+
    "width: 23%;"+
    "height: 19%;"+
    "align-items: right;"+
    "background-color: grey;"+
"box-shadow: 5px 5px 10px -3px;"+
"border-radius: 15px;";
digito3.setAttribute('style',parametros7);//carga los estilos del boton
//digito3.innerHTML = '3';//carga el texto del boton
digito3.onclick = function() {
    digitos.value += '3';
}
teclado.appendChild(digito3);//este inserta el display en el body del HTML 
console.log("La tecla digito3 esta cargada en el DOM " + digito3.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
const label3 = document.createElement('label');
label3.id = 'label3';
label3.className = 'label3';
let parametros7label =
    "position: absolute;"+
    "top: 0%;"+
    "left: 0%;"+
    "width: 100%;"+
    "height: 100%;"+
    "user-select: none;"+
    "align-items: center;"+
    "font-size: 40px;"+
    "text-align: center;"+
    "line-height: 60px;"+
    "font-weight: bold;"+
    "justify-content: center;"+
    "background-color: transparent;";
label3.setAttribute('style',parametros7label);//carga los estilos del label
label3.innerHTML = "3";
digito3.appendChild(label3);//este inserta el display en el body del HTML 
console.log("La tecla label3 esta cargada en el DOM " + label3.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos tecla digito4 del teclado e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const digito4 = document.createElement('button');
digito4.id = 'digito4';
digito4.className = 'botones';
let parametros8 =
    "position: absolute;"+
    "top: 21%;"+
    "left: 1.4%;"+
    "width: 23%;"+
    "height: 19%;"+
    "align-items: right;"+
    "background-color: grey;"+
"box-shadow: 5px 5px 10px -3px;"+
"border-radius: 15px;";
digito4.setAttribute('style',parametros8);//carga los estilos del boton
//digito4.innerHTML = '4';//carga el texto del boton
digito4.onclick = function() {
    digitos.value += '4';
}
teclado.appendChild(digito4);//este inserta el display en el body del HTML 
console.log("La tecla digito4 esta cargada en el DOM " + digito4.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
const label4 = document.createElement('label');
label4.id = 'label4';
label4.className = 'label4';
let parametros8label =
    "position: absolute;"+
    "top: 0%;"+
    "left: 0%;"+
    "width: 100%;"+
    "height: 100%;"+
    "user-select: none;"+
    "align-items: center;"+
    "font-size: 40px;"+
    "text-align: center;"+
    "line-height: 60px;"+
    "font-weight: bold;"+
    "justify-content: center;"+
    "background-color: transparent;";
label4.setAttribute('style',parametros8label);//carga los estilos del label
label4.innerHTML = "4";
digito4.appendChild(label4);//este inserta el display en el body del HTML 
console.log("La tecla label4 esta cargada en el DOM " + label4.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos tecla digito5 del teclado e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const digito5 = document.createElement('button');
digito5.id = 'digito5';
digito5.className = 'botones';
let parametros9 =
    "position: absolute;"+
    "top: 21%;"+
    "left: 25%;"+
    "width: 23%;"+
    "height: 19%;"+
    "align-items: right;"+
    "background-color: grey;"+
"box-shadow: 5px 5px 10px -3px;"+
"border-radius: 15px;";
digito5.setAttribute('style',parametros9);//carga los estilos del boton
//digito5.innerHTML = '5';//carga el texto del boton
digito5.onclick = function() {
    digitos.value += '5';
}
teclado.appendChild(digito5);//este inserta el display en el body del HTML 
console.log("La tecla digito5 esta cargada en el DOM " + digito5.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
const label5 = document.createElement('label');
label5.id = 'label5';
label5.className = 'label5';
let parametros9label =
    "position: absolute;"+
    "top: 0%;"+
    "left: 0%;"+
    "width: 100%;"+
    "height: 100%;"+
    "user-select: none;"+
    "align-items: center;"+
    "font-size: 40px;"+
    "text-align: center;"+
    "line-height: 60px;"+
    "font-weight: bold;"+
    "justify-content: center;"+
    "background-color: transparent;";
label5.setAttribute('style',parametros9label);//carga los estilos del label
label5.innerHTML = "5";
digito5.appendChild(label5);//este inserta el display en el body del HTML 
console.log("La tecla label5 esta cargada en el DOM " + label5.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos tecla digito6 del teclado e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const digito6 = document.createElement('button');
digito6.id = 'digito6';
digito6.className = 'botones';
let parametros10 =
    "position: absolute;"+
    "top: 21%;"+
    "left: 49%;"+
    "width: 23%;"+
    "height: 19%;"+
    "align-items: right;"+
    "background-color: grey;"+
"box-shadow: 5px 5px 10px -3px;"+
"border-radius: 15px;";
digito6.setAttribute('style',parametros10);//carga los estilos del boton
//digito6.innerHTML = '6';//carga el texto del boton
digito6.onclick = function() {
    digitos.value += '6';
}
teclado.appendChild(digito6);//este inserta el display en el body del HTML 
console.log("La tecla digito6 esta cargada en el DOM " + digito6.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
const label6 = document.createElement('label');
label6.id = 'label6';
label6.className = 'label6';
let parametros10label =
    "position: absolute;"+
    "top: 0%;"+
    "left: 0%;"+
    "width: 100%;"+
    "height: 100%;"+
    "user-select: none;"+
    "align-items: center;"+
    "font-size: 40px;"+
    "text-align: center;"+
    "line-height: 60px;"+
    "font-weight: bold;"+
    "justify-content: center;"+
    "background-color: transparent;";
label6.setAttribute('style',parametros10label);//carga los estilos del label
label6.innerHTML = "6";
digito6.appendChild(label6);//este inserta el display en el body del HTML 
console.log("La tecla label6 esta cargada en el DOM " + label6.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos tecla clear del teclado e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const clear = document.createElement('button');
clear.id = 'clear';
clear.className = 'botones';
let parametrosclear =
    "position: absolute;"+
    "top: 1%;"+
    "left: 75%;"+
    "width: 23%;"+
    "height: 19%;"+
    "align-items: right;"+
    "background-color: red;"+
"box-shadow: 5px 5px 10px -3px;"+
"border-radius: 15px;";
clear.setAttribute('style',parametrosclear);//carga los estilos del boton
//clear.innerHTML = '';//carga el texto del boton
clear.onclick = function() {
    digitos.value = '';
}
teclado.appendChild(clear);//este inserta el display en el body del HTML 
console.log("La tecla clear esta cargada en el DOM " + clear.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
const clear1 = document.createElement('label');
clear1.id = 'clear1';
clear1.className = 'clear1';
let parametrosclearlabel =
    "position: absolute;"+
    "top: 0%;"+
    "left: 0%;"+
    "width: 100%;"+
    "height: 100%;"+
    "user-select: none;"+
    "align-items: center;"+
    "font-size: 40px;"+
    "text-align: center;"+
    "line-height: 60px;"+
    "font-weight: bold;"+
    "justify-content: center;"+
    "background-color: transparent;";
clear1.setAttribute('style',parametrosclearlabel);//carga los estilos del label
clear1.innerHTML = "C";
clear.appendChild(clear1);//este inserta el display en el body del HTML 
console.log("el label clear esta cargada en el DOM " + clear.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos tecla suma del teclado e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const suma = document.createElement('button');
suma.id = 'suma';
suma.className = 'botones';
let parametrossuma =
    "position: absolute;"+
    "top: 21%;"+
    "left: 75%;"+
    "width: 23%;"+
    "height: 19%;"+
    "align-items: right;"+
    "background-color: green;"+
    "box-shadow: 5px 5px 10px -3px;"+
    "border-radius: 15px;";
suma.setAttribute('style',parametrossuma);//carga los estilos del boton
//suma.innerHTML = '+';//carga el texto del boton
suma.onclick = function() {
    digitos.value += '+';
}
teclado.appendChild(suma);//este inserta el display en el body del HTML 
console.log("La tecla sumar esta cargada en el DOM " + suma.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
const suma1 = document.createElement('label');
suma1.id = 'suma1';
suma1.className = 'suma1';
let parametrossumalabel =
    "position: absolute;"+
    "top: 0%;"+
    "left: 0%;"+
    "width: 100%;"+
    "height: 100%;"+
    "user-select: none;"+
    "align-items: center;"+
    "font-size: 40px;"+
    "text-align: center;"+
    "line-height: 60px;"+
    "font-weight: bold;"+
    "justify-content: center;"+
    "background-color: transparent;";
suma1.setAttribute('style',parametrossumalabel);//carga los estilos del label
suma1.innerHTML = "+";
suma.appendChild(suma1);//este inserta el display en el body del HTML 
console.log("el label sumar esta cargada en el DOM " + suma.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos tecla resta del teclado e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const resta = document.createElement('button');
resta.id = 'resta';
resta.className = 'botones';
let parametrosresta =
    "position: absolute;"+
    "top: 41%;"+
    "left: 75%;"+
    "width: 23%;"+
    "height: 19%;"+
    "align-items: right;"+
    "background-color: green;"+
    "box-shadow: 5px 5px 10px -3px;"+
    "border-radius: 15px;";
resta.setAttribute('style',parametrosresta);//carga los estilos del boton
//suma.innerHTML = '+';//carga el texto del boton
resta.onclick = function() {
    digitos.value += '-';
}
teclado.appendChild(resta);//este inserta el display en el body del HTML 
console.log("La tecla restar esta cargada en el DOM " + resta.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
const resta1 = document.createElement('label');
resta1.id = 'resta1';
resta1.className = 'resta1';
let parametrosrestalabel =
    "position: absolute;"+
    "top: 0%;"+
    "left: 0%;"+
    "width: 100%;"+
    "height: 100%;"+
    "user-select: none;"+
    "align-items: center;"+
    "font-size: 40px;"+
    "text-align: center;"+
    "line-height: 50px;"+
    "font-weight: bold;"+
    "justify-content: center;"+
    "background-color: transparent;";
resta1.setAttribute('style',parametrosrestalabel);//carga los estilos del label
resta1.innerHTML = "-";
resta.appendChild(resta1);//este inserta el display en el body del HTML 
console.log("el label restar esta cargada en el DOM " + resta.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos tecla multiplicacion del teclado e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const multi = document.createElement('button');
multi.id = 'multi';
multi.className = 'botones';
let parametrosmulti =
    "position: absolute;"+
    "top: 61%;"+
    "left: 75%;"+
    "width: 23%;"+
    "height: 19%;"+
    "align-items: right;"+
    "background-color: green;"+
    "box-shadow: 5px 5px 10px -3px;"+
    "border-radius: 15px;";
multi.setAttribute('style',parametrosmulti);//carga los estilos del boton
//suma.innerHTML = '+';//carga el texto del boton
multi.onclick = function() {
    digitos.value += '*';
}
teclado.appendChild(multi);//este inserta el display en el body del HTML 
console.log("La tecla multiplicacion esta cargada en el DOM " + multi.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
const multi1 = document.createElement('label');
multi1.id = 'multi1';
multi1.className = 'multi1';
let parametrosmultilabel =
    "position: absolute;"+
    "top: 0%;"+
    "left: 0%;"+
    "width: 100%;"+
    "height: 100%;"+
    "user-select: none;"+
    "align-items: center;"+
    "font-size: 60px;"+
    "text-align: center;"+
    "line-height: 85px;"+
    "font-weight: bold;"+
    "justify-content: center;"+
    "background-color: transparent;";
multi1.setAttribute('style',parametrosmultilabel);//carga los estilos del label
multi1.innerHTML = "*";
multi.appendChild(multi1);//este inserta el display en el body del HTML 
console.log("el label multiplicacion esta cargada en el DOM " + multi.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos tecla division del teclado e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const divide = document.createElement('button');
divide.id = 'divide';
divide.className = 'botones';
let parametrosdivide =
    "position: absolute;"+
    "top: 81%;"+
    "left: 75%;"+
    "width: 23%;"+
    "height: 18%;"+
    "align-items: right;"+
    "background-color: green;"+
    "box-shadow: 5px 5px 10px -3px;"+
    "border-radius: 15px;";
divide.setAttribute('style',parametrosdivide);//carga los estilos del boton
//suma.innerHTML = '+';//carga el texto del boton
divide.onclick = function() {
    digitos.value += '/';
}
teclado.appendChild(divide);//este inserta el display en el body del HTML 
console.log("La tecla division esta cargada en el DOM " + divide.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
const divide1 = document.createElement('label');
divide1.id = 'divide1';
divide1.className = 'divide1';
let parametrosdividelabel =
    "position: absolute;"+
    "top: 0%;"+
    "left: 0%;"+
    "width: 100%;"+
    "height: 100%;"+
    "user-select: none;"+
    "align-items: center;"+
    "font-size: 50px;"+
    "text-align: center;"+
    "line-height: 60px;"+
    "font-weight: bold;"+
    "justify-content: center;"+
    "background-color: transparent;";
divide1.setAttribute('style',parametrosdividelabel);//carga los estilos del label
divide1.innerHTML = "/";
divide.appendChild(divide1);//este inserta el display en el body del HTML 
console.log("el label division esta cargada en el DOM " + divide1.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
/* Creamos tecla igual del teclado e insertamos en el DOM */
/*-----------------------------------------------------------------*/
const igual = document.createElement('button');
igual.id = 'igual';
igual.className = 'botones';
let parametrosigual =
    "position: absolute;"+
    "top: 81%;"+
    "left: 1.4%;"+
    "width: 72%;"+
    "height: 18%;"+
    "align-items: right;"+
    "background-color: blue;"+
    "box-shadow: 5px 5px 10px -3px;"+
    "border-radius: 15px;";
igual.setAttribute('style',parametrosigual);//carga los estilos del boton
//suma.innerHTML = '+';//carga el texto del boton
igual.onclick = function() {
    digitos.value += '=';
}
teclado.appendChild(igual);//este inserta el display en el body del HTML 
console.log("La tecla igual esta cargada en el DOM " + igual.isConnected); // retorna el estado del display en el DOM
/*-----------------------------------------------------------------*/
const igual1 = document.createElement('label');
igual1.id = 'igual1';
igual1.className = 'igual1';
let parametrosiguallabel =
    "position: absolute;"+
    "top: 0%;"+
    "left: 0%;"+
    "width: 100%;"+
    "height: 100%;"+
    "user-select: none;"+
    "align-items: center;"+
    "font-size: 60px;"+
    "text-align: center;"+
    "line-height: 60px;"+
    "font-weight: bold;"+
    "justify-content: center;"+
    "background-color: transparent;";
igual1.setAttribute('style',parametrosiguallabel);//carga los estilos del label
igual1.innerHTML = "=";
igual.appendChild(igual1);//este inserta el display en el body del HTML 
console.log("el label igual esta cargada en el DOM " + igual1.isConnected); // retorna el estado del display en el DOM
} catch (error) {
    alert("Error al cargar la calculadora " + error);
}
}

function add_number(numero) {
    console.log("Hola soy el boton "+ numero);
}