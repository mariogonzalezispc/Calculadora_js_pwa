function abre_calculadora() {
    console.log("Hola calculadora de Mario y Monica ISPC TSDWAD 2022");
    let num = '';
    let permiso_op = false;//permiso de operacion
    let permiso_tecla = true;//permiso de tecla
    let permiso_res=false;//permiso de resultado
    try {
        /*-----------------------------------------------------------------*/
        /* Creamos div de fondo de la calculadora e insertamos en el DOM   */
        /*-----------------------------------------------------------------*/
        const fondo = document.createElement('div');//creamos div
        fondo.id = 'fondo';                     //establebecemos el id del div
        fondo.className = 'calculadora';        //establecemos la clase del div para uso futuro
        let parametros =                        //establecemos los parametros aspectos del div
            "position: absolute;" +
            "top: 5%;" +
            "left: 2%;" +
            "width: 95%;" +
            "height: 85%;" +
            "align-items: center;" +
            "background-color: crimson;" +
            "border-radius: 10px;" +
            "border: 2px solid black;" +
            "justify-content: center;";
        fondo.setAttribute('style', parametros);
        document.body.appendChild(fondo); //este inserta el div en el body del HTML 
        //console.log("El fondo esta cargado en el DOM " + fondo.isConnected); 
        // retorna el estado del div en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos div de display de la calculadora e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const display = document.createElement('div');//creamos div
        display.id = 'display';             //establecemos el id del div
        display.className = 'display';      //establecemos la clase del div para uso futuro
        let parametros2 =                   //establecemos los parametros aspectos del div
            "position: absolute;" +
            "top: 4%;" +
            "left: 4%;" +
            "width: 91%;" +
            "height: 15%;" +
            "align-items: right;" +
            "background-color: orangered;" +
            "border-radius: 10px;" +
            "border: 2px solid black;";
        display.setAttribute('style', parametros2); //carga los estilos de los elementos
        fondo.appendChild(display); //este inserta el display en el body del HTML 
        //console.log("El display esta cargado en el DOM " + display.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos div del teclado de la calculadora e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const teclado = document.createElement('div');//creamos div
        teclado.id = 'teclado';             //establecemos el id del div
        teclado.className = 'teclado';      //establecemos la clase del div para uso futuro
        let parametros3 =                   //establecemos los parametros aspectos del div
            "position: absolute;" +
            "top: 22%;" +
            "left: 4%;" +
            "width: 91%;" +
            "height: 74%;" +
            "align-items: center;" +
            "background-color: pink;" +
            "border-radius: 10px;" +
            "border: 2px solid black;";
        teclado.setAttribute('style', parametros3); //carga los estilos de los elementos
        fondo.appendChild(teclado); //este inserta el display en el body del HTML 
        //console.log("El teclado esta cargado en el DOM " + teclado.isConnected); 
        // retorna el estado del teclado en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos input digitos del display e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digitos = document.createElement('input');//creamos input
        digitos.id = 'digitos';             //establecemos el id del input
        digitos.className = 'teclado';      //establecemos la clase del input para uso futuro
        let parametros4 =                   //establecemos los parametros aspectos del input
            "position: absolute;" +
            "top: 3%;" +
            "left: 0.5%;" +
            "width: 98%;" +
            "height: 85%;" +
            "user-select: none;" +
            "align-items: right;" +
            "font-size: 35px;" +
            "text-align: right;" +
            "line-height: 75px;" +
            "font-weight: bold;" +
            "background-color: transparent;" +
            "border: none;";
        //"border-radius: 10px;";
        digitos.setAttribute('style', parametros4); //carga los estilos de los elementos
        display.appendChild(digitos); //este inserta el display en el body del HTML 
        //console.log("El digito esta cargado en el DOM " + digitos.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla digito1 del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digito1 = document.createElement('button');//creamos button
        digito1.id = 'digito1';             //establecemos el id del boton
        digito1.className = 'botones';      //establecemos la clase del boton para uso futuro
        let parametros5 =                   //establecemos los parametros aspectos del boton
            "position: absolute;" +
            "top: 1%;" +
            "left: 1.4%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: grey;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        digito1.setAttribute('style', parametros5); //carga los estilos del boton
        digito1.onclick = function () {
            if (permiso_tecla) {
                digitos.value += '1';
                num = num + '1';
                permiso_op = true;
                permiso_res = true;
            }
        }
        teclado.appendChild(digito1); //este inserta el display en el teclado del HTML 
        //console.log("La tecla digito1 esta cargada en el DOM " + digito1.isConnected); 
        // retorna el estado del numero1 en el DOM
        /*-----------------------------------------------------------------*/
        const label1 = document.createElement('label');//creamos label
        label1.id = 'label1';               //establecemos el id del label
        label1.className = 'label1';        //establecemos la clase del label para uso futuro
        let parametros5label =              //establecemos los parametros aspectos del label
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        label1.setAttribute('style', parametros5label); //carga los estilos del label
        label1.innerHTML = "1";
        digito1.appendChild(label1); //este inserta el label en el button 
        //console.log("La tecla label1 esta cargada en el DOM " + label1.isConnected); 
        // retorna el estado del label1 en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla digito2 del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digito2 = document.createElement('button');//creamos button
        digito2.id = 'digito2';             //establecemos el id del boton
        digito2.className = 'botones';      //establecemos la clase del boton para uso futuro
        let parametros6 =                   //establecemos los parametros aspectos del boton
            "position: absolute;" +
            "top: 1%;" +
            "left: 25%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: grey;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        digito2.setAttribute('style', parametros6); //carga los estilos del boton
        digito2.onclick = function () {
            if (permiso_tecla) {
                digitos.value += '2';
                num = num + '2';
                permiso_op = true;
                permiso_res = true;
            }
        }
        teclado.appendChild(digito2); //este inserta el display en el body del HTML 
        //console.log("La tecla digito2 esta cargada en el DOM " + digito2.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const label2 = document.createElement('label');//creamos label
        label2.id = 'label2';               //establecemos el id del label
        label2.className = 'label2';        //establecemos la clase del label para uso futuro
        let parametros6label =              //establecemos los parametros aspectos del label
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        label2.setAttribute('style', parametros6label); //carga los estilos del label
        label2.innerHTML = "2";
        digito2.appendChild(label2); //este inserta el label en el button
        //console.log("La tecla label2 esta cargada en el DOM " + label2.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla digito3 del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digito3 = document.createElement('button');//creamos button
        digito3.id = 'digito3';             //establecemos el id del boton
        digito3.className = 'botones';      //establecemos la clase del boton para uso futuro
        let parametros7 =                   //establecemos los parametros aspectos del boton
            "position: absolute;" +
            "top: 1%;" +
            "left: 49%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: grey;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        digito3.setAttribute('style', parametros7); //carga los estilos del boton
        digito3.onclick = function () {
            if (permiso_tecla) {
                digitos.value += '3';
                num = num + '3';
                permiso_op = true;
                permiso_res = true;
            }
        }
        teclado.appendChild(digito3); //este inserta el display en el body del HTML 
        //console.log("La tecla digito3 esta cargada en el DOM " + digito3.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const label3 = document.createElement('label');//creamos label
        label3.id = 'label3';               //establecemos el id del label
        label3.className = 'label3';        //establecemos la clase del label para uso futuro
        let parametros7label =              //establecemos los parametros aspectos del label
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        label3.setAttribute('style', parametros7label); //carga los estilos del label
        label3.innerHTML = "3";
        digito3.appendChild(label3); //este inserta el label en el button 
        //console.log("La tecla label3 esta cargada en el DOM " + label3.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla digito4 del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digito4 = document.createElement('button');
        digito4.id = 'digito4';             //establecemos el id del boton
        digito4.className = 'botones';      //establecemos la clase del boton para uso futuro
        let parametros8 =                   //establecemos los parametros aspectos del boton
            "position: absolute;" +
            "top: 21%;" +
            "left: 1.4%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: grey;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        digito4.setAttribute('style', parametros8); //carga los estilos del boton
        digito4.onclick = function () {
            if (permiso_tecla) {
                digitos.value += '4';
                num = num + '4';
                permiso_op = true;
                permiso_res = true;
            }
        }
        teclado.appendChild(digito4); //este inserta el display en el body del HTML 
        //console.log("La tecla digito4 esta cargada en el DOM " + digito4.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const label4 = document.createElement('label');
        label4.id = 'label4';               //establecemos el id del label
        label4.className = 'label4';        //establecemos la clase del label para uso futuro
        let parametros8label =              //establecemos los parametros aspectos del label
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        label4.setAttribute('style', parametros8label); //carga los estilos del label
        label4.innerHTML = "4";
        digito4.appendChild(label4); //este inserta el label en el button
        //console.log("La tecla label4 esta cargada en el DOM " + label4.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla digito5 del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digito5 = document.createElement('button');
        digito5.id = 'digito5';             //establecemos el id del boton
        digito5.className = 'botones';      //establecemos la clase del boton para uso futuro
        let parametros9 =                   //establecemos los parametros aspectos del boton
            "position: absolute;" +
            "top: 21%;" +
            "left: 25%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: grey;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        digito5.setAttribute('style', parametros9); //carga los estilos del boton
        digito5.onclick = function () {
            if (permiso_tecla) {
                digitos.value += '5';
                num = num + '5';
                permiso_op = true;
                permiso_res = true;
            }
        }
        teclado.appendChild(digito5); //este inserta el display en el body del HTML 
        //console.log("La tecla digito5 esta cargada en el DOM " + digito5.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const label5 = document.createElement('label');
        label5.id = 'label5';               //establecemos el id del label
        label5.className = 'label5';        //establecemos la clase del label para uso futuro
        let parametros9label =              //establecemos los parametros aspectos del label
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        label5.setAttribute('style', parametros9label); //carga los estilos del label
        label5.innerHTML = "5";
        digito5.appendChild(label5); //este inserta el label en el button
        //console.log("La tecla label5 esta cargada en el DOM " + label5.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla digito6 del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digito6 = document.createElement('button');
        digito6.id = 'digito6';             //establecemos el id del boton
        digito6.className = 'botones';      //establecemos la clase del boton para uso futuro
        let parametros10 =                  //establecemos los parametros aspectos del boton
            "position: absolute;" +
            "top: 21%;" +
            "left: 49%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: grey;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        digito6.setAttribute('style', parametros10); //carga los estilos del boton
        digito6.onclick = function () {
            if (permiso_tecla) {
                digitos.value += '6';
                num = num + '6';
                permiso_op = true;
                permiso_res = true;
            }
        }
        teclado.appendChild(digito6); //este inserta el display en el body del HTML 
        //console.log("La tecla digito6 esta cargada en el DOM " + digito6.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const label6 = document.createElement('label');
        label6.id = 'label6';               //establecemos el id del label
        label6.className = 'label6';        //establecemos la clase del label para uso futuro
        let parametros10label =             //establecemos los parametros aspectos del label
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        label6.setAttribute('style', parametros10label); //carga los estilos del label
        label6.innerHTML = "6";
        digito6.appendChild(label6); //este inserta el label en el button 
        //console.log("La tecla label6 esta cargada en el DOM " + label6.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla digito7 del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digito7 = document.createElement('button');
        digito7.id = 'digito7';             //establecemos el id del boton
        digito7.className = 'botones';      //establecemos la clase del boton para uso futuro
        let parametros11 =                  //establecemos los parametros aspectos del boton
            "position: absolute;" +
            "top: 41%;" +
            "left: 1.4%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: grey;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        digito7.setAttribute('style', parametros11); //carga los estilos del boton
        digito7.onclick = function () {
            if (permiso_tecla) {
                digitos.value += '7';
                num = num + '7';
                permiso_op = true;
                permiso_res = true;
            }
        }
        teclado.appendChild(digito7); //este inserta el display en el body del HTML 
        //console.log("La tecla digito7 esta cargada en el DOM " + digito7.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const label7 = document.createElement('label');
        label7.id = 'label7';               //establecemos el id del label
        label7.className = 'label7';        //establecemos la clase del label para uso futuro
        let parametros11label =             //establecemos los parametros aspectos del label
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        label7.setAttribute('style', parametros11label); //carga los estilos del label
        label7.innerHTML = "7";
        digito7.appendChild(label7); //este inserta el label en el button
        //console.log("La tecla label7 esta cargada en el DOM " + label7.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla digito8 del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digito8 = document.createElement('button');
        digito8.id = 'digito8';             //establecemos el id del boton
        digito8.className = 'botones';      //establecemos la clase del boton para uso futuro
        let parametros12 =                  //establecemos los parametros aspectos del boton
            "position: absolute;" +
            "top: 41%;" +
            "left: 25%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: grey;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        digito8.setAttribute('style', parametros12); //carga los estilos del boton
        digito8.onclick = function () {
            if (permiso_tecla) {
                digitos.value += '8';
                num = num + '8';
                permiso_op = true;
                permiso_res = true;
            }
        }
        teclado.appendChild(digito8); //este inserta el display en el body del HTML 
        //console.log("La tecla digito8 esta cargada en el DOM " + digito8.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const label8 = document.createElement('label');
        label8.id = 'label8';               //establecemos el id del label
        label8.className = 'label8';        //establecemos la clase del label para uso futuro
        let parametros12label =             //establecemos los parametros aspectos del label
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        label8.setAttribute('style', parametros12label); //carga los estilos del label
        label8.innerHTML = "8";
        digito8.appendChild(label8); //este inserta el label en el button 
        //console.log("La tecla label8 esta cargada en el DOM " + label8.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla digito9 del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digito9 = document.createElement('button');
        digito9.id = 'digito9';             //establecemos el id del boton
        digito9.className = 'botones';      //establecemos la clase del boton para uso futuro
        let parametros13 =                  //establecemos los parametros aspectos del boton
            "position: absolute;" +
            "top: 41%;" +
            "left: 49%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: grey;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        digito9.setAttribute('style', parametros13); //carga los estilos del boton
        digito9.onclick = function () {
            if (permiso_tecla) {
                digitos.value += '9';
                num = num + '9';
                permiso_op = true;
                permiso_res = true;
            }
        }
        teclado.appendChild(digito9); //este inserta el display en el body del HTML 
        //console.log("La tecla digito9 esta cargada en el DOM " + digito9.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const label9 = document.createElement('label');
        label9.id = 'label9';               //establecemos el id del label
        label9.className = 'label9';        //establecemos la clase del label para uso futuro
        let parametros13label =             //establecemos los parametros aspectos del label
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        label9.setAttribute('style', parametros13label); //carga los estilos del label
        label9.innerHTML = "9";
        digito9.appendChild(label9); //este inserta el label en el button
        //console.log("La tecla label9 esta cargada en el DOM " + label9.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla digito0 del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digito0 = document.createElement('button');
        digito0.id = 'digito0';             //establecemos el id del boton
        digito0.className = 'botones';      //establecemos la clase del boton para uso futuro
        let parametros14 =                  //establecemos los parametros aspectos del boton
            "position: absolute;" +
            "top: 61%;" +
            "left: 25%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: grey;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        digito0.setAttribute('style', parametros14); //carga los estilos del boton
        digito0.onclick = function () {
            if (permiso_tecla) {
                digitos.value += '0';
                num = num + '0';
                permiso_op = true;
                permiso_res = true;
            }
        }
        teclado.appendChild(digito0); //este inserta el display en el body del HTML 
        //console.log("La tecla digito0 esta cargada en el DOM " + digito0.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const label0 = document.createElement('label');
        label0.id = 'label0';               //establecemos el id del label
        label0.className = 'label0';        //establecemos la clase del label para uso futuro
        let parametros14label =             //establecemos los parametros aspectos del label
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        label0.setAttribute('style', parametros14label); //carga los estilos del label
        label0.innerHTML = "0";
        digito0.appendChild(label0); //este inserta el label en el button 
        //console.log("La tecla label0 esta cargada en el DOM " + label0.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla digito << del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digito_menos = document.createElement('button');
        digito_menos.id = 'digito_menos';
        digito_menos.className = 'botones';
        let parametros15 =
            "position: absolute;" +
            "top: 61%;" +
            "left: 1.4%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: crimson;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        digito_menos.setAttribute('style', parametros15); //carga los estilos del boton
        digito_menos.onclick = function () {
            digitos.value = digitos.value.substring(0, digitos.value.length - 1);
            num = num.substring(0, num.length - 1);
        }
        teclado.appendChild(digito_menos); //este inserta el display en el body del HTML
        //console.log("La tecla digito_menos esta cargada en el DOM " + digito_menos.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos input tecla digito <-- del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const digito_menos_label = document.createElement('label');
        digito_menos_label.id = 'digito_menos_label';
        digito_menos_label.className = 'label_menos';
        let parametros15label =
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        digito_menos_label.setAttribute('style', parametros15label); //carga los estilos del label
        digito_menos_label.innerHTML = "<<";
        digito_menos.appendChild(digito_menos_label); //este inserta el label en el button
        //console.log("La tecla digito_menos_label esta cargada en el DOM " + digito_menos_label.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla clear del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const clear = document.createElement('button');
        clear.id = 'clear';
        clear.className = 'botones';
        let parametrosclear =
            "position: absolute;" +
            "top: 61%;" +
            "left: 49%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: red;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        clear.setAttribute('style', parametrosclear); //carga los estilos del boton
        clear.onclick = function () {
            digitos.value = '';
            permiso_op = false;
            permiso_res = false;
            permiso_tecla = true;
            num = '';
        }
        teclado.appendChild(clear); //este inserta el display en el body del HTML 
        //console.log("La tecla clear esta cargada en el DOM " + clear.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const clear1 = document.createElement('label');
        clear1.id = 'clear1';
        clear1.className = 'clear1';
        let parametrosclearlabel =
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        clear1.setAttribute('style', parametrosclearlabel); //carga los estilos del label
        clear1.innerHTML = "C";
        clear.appendChild(clear1); //este inserta el label en el button
        //console.log("el label clear esta cargada en el DOM " + clear.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla suma del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const suma = document.createElement('button');
        suma.id = 'suma';
        suma.className = 'botones';
        let parametrossuma =
            "position: absolute;" +
            "top: 1%;" +
            "left: 75%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: green;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        suma.setAttribute('style', parametrossuma); //carga los estilos del boton
        suma.onclick = function () {
            if (digitos.value.length > 0 && permiso_op == true) {
                digitos.value = digitos.value + '+';
                num = num + '+';
                permiso_op = false;
                permiso_res = false;
                permiso_tecla = true;
            }
        }
        teclado.appendChild(suma); //este inserta el display en el body del HTML 
        //console.log("La tecla sumar esta cargada en el DOM " + suma.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const suma1 = document.createElement('label');
        suma1.id = 'suma1';
        suma1.className = 'suma1';
        let parametrossumalabel =
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 40px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        suma1.setAttribute('style', parametrossumalabel); //carga los estilos del label
        suma1.innerHTML = "+";
        suma.appendChild(suma1); //este inserta el label en el button 
        //console.log("el label sumar esta cargada en el DOM " + suma.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla resta del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const resta = document.createElement('button');
        resta.id = 'resta';
        resta.className = 'botones';
        let parametrosresta =
            "position: absolute;" +
            "top: 21%;" +
            "left: 75%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: green;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        resta.setAttribute('style', parametrosresta); //carga los estilos del boton
        resta.onclick = function () {
            if (digitos.value.length > 0 && permiso_op == true) {
                digitos.value = digitos.value + '-';
                num = num + '-';
                permiso_op = false;
                permiso_res = false;
                permiso_tecla = true;
            }
        }
        teclado.appendChild(resta); //este inserta el display en el body del HTML 
        //console.log("La tecla restar esta cargada en el DOM " + resta.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const resta1 = document.createElement('label');
        resta1.id = 'resta1';
        resta1.className = 'resta1';
        let parametrosrestalabel =
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 60px;" +
            "text-align: center;" +
            "line-height: 50px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        resta1.setAttribute('style', parametrosrestalabel); //carga los estilos del label
        resta1.innerHTML = "-";
        resta.appendChild(resta1); //este inserta el label en el button 
        //console.log("el label restar esta cargada en el DOM " + resta.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla multiplicacion del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const multi = document.createElement('button');
        multi.id = 'multi';
        multi.className = 'botones';
        let parametrosmulti =
            "position: absolute;" +
            "top: 41%;" +
            "left: 75%;" +
            "width: 23%;" +
            "height: 19%;" +
            "align-items: right;" +
            "background-color: green;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        multi.setAttribute('style', parametrosmulti); //carga los estilos del boton
        multi.onclick = function () {
            if (digitos.value.length > 0 && permiso_op == true) {
                digitos.value = digitos.value + '*';
                num = num + '*';
                permiso_op = false;
                permiso_res = false;
                permiso_tecla = true;
            }
        }
        teclado.appendChild(multi); //este inserta el label en el button
        //console.log("La tecla multiplicacion esta cargada en el DOM " + multi.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const multi1 = document.createElement('label');
        multi1.id = 'multi1';
        multi1.className = 'multi1';
        let parametrosmultilabel =
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 60px;" +
            "text-align: center;" +
            "line-height: 75px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        multi1.setAttribute('style', parametrosmultilabel); //carga los estilos del label
        multi1.innerHTML = "*";
        multi.appendChild(multi1); //este inserta el display en el body del HTML 
        //console.log("el label multiplicacion esta cargada en el DOM " + multi.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla division del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const divide = document.createElement('button');
        divide.id = 'divide';
        divide.className = 'botones';
        let parametrosdivide =
            "position: absolute;" +
            "top: 61%;" +
            "left: 75%;" +
            "width: 23%;" +
            "height: 18%;" +
            "align-items: right;" +
            "background-color: green;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        divide.setAttribute('style', parametrosdivide); //carga los estilos del boton
        divide.onclick = function () {
            if (digitos.value.length > 0 && permiso_op == true) {
                digitos.value = digitos.value + '÷';//cambia el valor del display
                num = num + '/';//carga la division en num
                permiso_op = false;//permiso de operaciones
                permiso_res = false;//permiso de resultado
                permiso_tecla = true;//permiso de tecla
            }
        }
        teclado.appendChild(divide); //este inserta el label en el button
        //console.log("La tecla division esta cargada en el DOM " + divide.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const divide1 = document.createElement('label');
        divide1.id = 'divide1';
        divide1.className = 'divide1';
        let parametrosdividelabel =
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 50px;" +
            "text-align: center;" +
            "line-height: 55px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        divide1.setAttribute('style', parametrosdividelabel); //carga los estilos del label
        divide1.innerHTML = "÷";
        divide.appendChild(divide1); //este inserta el display en el body del HTML 
        //console.log("el label division esta cargada en el DOM " + divide1.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos tecla igual del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const igual = document.createElement('button');
        igual.id = 'igual';
        igual.className = 'botones';
        let parametrosigual =
            "position: absolute;" +
            "top: 81%;" +
            "left: 1.4%;" +
            "width: 70.5%;" +
            "height: 18%;" +
            "align-items: right;" +
            "background-color: blue;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        igual.setAttribute('style', parametrosigual); //carga los estilos del boton
        igual.onclick = function () {
            if (digitos.value.length > 0 && permiso_res == true) {
                //digitos.value = digitos.value + '=';//cargo el signo igual al display 
                //console.log(num);
                let sol = eval(num);//realiza la operacion sobre el string num
                //console.log(sol);
                digitos.value = '';
                digitos.value = digitos.value + sol;//cargo el resultado al display
                let sol1 = String(sol); //convierto el resultado en string para poder compararlo con el display
                num = sol1;//cargo el resultado en la variable num para poder operar con el siguiente numero
                permiso_op = true;//permiso de operaciones
                permiso_tecla = false;//permiso de teclas
                permiso_res = false;//permiso de resultado
            }
        }
        teclado.appendChild(igual); //este inserta el label en el button
        //console.log("La tecla igual esta cargada en el DOM " + igual.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        const igual1 = document.createElement('label');
        igual1.id = 'igual1';
        igual1.className = 'igual1';
        let parametrosiguallabel =
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 60px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        igual1.setAttribute('style', parametrosiguallabel); //carga los estilos del label
        igual1.innerHTML = "=";//
        igual.appendChild(igual1); //este inserta el display en el body del HTML 
        //console.log("el label igual esta cargada en el DOM " + igual1.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /*creamos boton de marca del teclado*/
        /*-----------------------------------------------------------------*/
        const marca = document.createElement('button');
        marca.id = 'M&M';
        marca.className = 'botones';
        let parametrosmarca =
            "position: absolute;" +
            "top: 81%;" +
            "left: 75%;" +
            "width: 23%;" +
            "height: 18%;" +
            "align-items: right;" +
            "background-color: yellow;" +
            "box-shadow: 5px 5px 10px -3px;" +
            "border-radius: 15px;";
        marca.setAttribute('style', parametrosmarca); //carga los estilos del boton
        teclado.appendChild(marca); //este inserta el display en el body del HTML
        //console.log("La marca esta cargada en el DOM " + marca.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos marca del teclado e insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const marca1 = document.createElement('label');
        marca1.id = 'divide1';
        marca1.className = 'divide1';
        let parametrosmarcalabel =
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 0%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size:25px;" +
            "text-align: center;" +
            "line-height: 55px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
        marca1.setAttribute('style', parametrosmarcalabel); //carga los estilos del label
        marca1.innerHTML = "M&M";
        marca.appendChild(marca1); //este inserta el label en el button
        //console.log("el label division esta cargada en el DOM " + marca1.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* Creamos identificacion de ispce insertamos en el DOM */
        /*-----------------------------------------------------------------*/
        const ispc = document.createElement('label');
        ispc.id = 'ispc';
        ispc.className = 'ispc';
        let parametrosispclabel =
            "position: absolute;" +
            "top: 0.1%;" +
            "left: 1.2%;" +
            "width: 35%;" +
            "height: 3%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 10px;" +
            "text-align: center;" +
            "line-height: 15px;" +
            "font-weight: bold;" +
            "color: white;" +
            "justify-content: center;" +
            "background-color: transparent;";
        ispc.setAttribute('style', parametrosispclabel); //carga los estilos del label
        ispc.innerHTML = "ISPC TSDWAD 2021";
        fondo.appendChild(ispc); //este inserta el label en el cuerpo de la calculadora 
        //console.log("el label division esta cargada en el DOM " + marca1.isConnected); 
        // retorna el estado del display en el DOM
        /*-----------------------------------------------------------------*/
        /* switch para detectar tecla presionada en la computadora */
        /*-----------------------------------------------------------------*/
        document.addEventListener('keydown', (event) => {
            var keyValue = event.key;
            switch (keyValue) {
                case '1':
                    console.log("1");
                    if (permiso_tecla) {
                        digitos.value += '1';
                        num = num + '1';
                        permiso_op = true;
                        permiso_res = true;
                    }
                    break;
                case '2':
                    console.log("2");
                    if (permiso_tecla) {
                        digitos.value += '2';
                        num = num + '2';
                        permiso_op = true;
                        permiso_res = true;
                    }
                    break;
                case '3':
                    console.log("3");
                    if (permiso_tecla) {
                        digitos.value += '3';
                        num = num + '3';
                        permiso_op = true;
                        permiso_res = true;
                    }
                    break;
                case '4':
                    console.log("4");
                    if (permiso_tecla) {
                        digitos.value += '4';
                        num = num + '4';
                        permiso_op = true;
                        permiso_res = true;
                    }
                    break;
                case '5':
                    console.log("5");
                    if (permiso_tecla) {
                        digitos.value += '5';
                        num = num + '5';
                        permiso_op = true;
                        permiso_res = true;
                    }
                    break;
                case '6':
                    console.log("6");
                    if (permiso_tecla) {
                        digitos.value += '6';
                        num = num + '6';
                        permiso_op = true;
                        permiso_res = true;
                    }
                    break;
                case '7':
                    console.log("7");
                    if (permiso_tecla) {
                        digitos.value += '7';
                        num = num + '7';
                        permiso_op = true;
                        permiso_res = true;
                    }
                    break;
                case '8':
                    console.log("8");
                    if (permiso_tecla) {
                        digitos.value += '8';
                        num = num + '8';
                        permiso_op = true;
                        permiso_res = true;
                    }
                    break;
                case '9':
                    console.log("9");
                    if (permiso_tecla) {
                        digitos.value += '9';
                        num = num + '9';
                        permiso_op = true;
                        permiso_res = true;
                    }
                    break;
                case '0':
                    console.log("0");
                    if (permiso_tecla) {
                        digitos.value += '0';
                        num = num + '0';
                        permiso_op = true;
                        permiso_res = true;
                    }
                    break;
                case 'Enter':
                    console.log("Enter");
                    if (digitos.value.length > 0 && permiso_res == true) {
                        //digitos.value = digitos.value + '=';//cargo el signo igual al display 
                        //console.log(num);
                        let sol = eval(num);//realiza la operacion sobre el string num
                        //console.log(sol);
                        digitos.value = '';
                        digitos.value = digitos.value + sol;//cargo el resultado al display
                        let sol1 = String(sol); //convierto el resultado en string para poder compararlo con el display
                        num = sol1;//cargo el resultado en la variable num para poder operar con el siguiente numero
                        permiso_op = true;//permiso de operaciones
                        permiso_tecla = false;//permiso de teclas
                        permiso_res = false;//permiso de resultado
                    }
                    break;
                case '+':
                    console.log("+");
                    if (digitos.value.length > 0 && permiso_op == true) {
                        digitos.value = digitos.value + '+';
                        num = num + '+';
                        permiso_op = false;
                        permiso_res = false;
                        permiso_tecla = true;
                    }
                    break;
                case '-':
                    console.log("-");
                    if (digitos.value.length > 0 && permiso_op == true) {
                        digitos.value = digitos.value + '-';
                        num = num + '-';
                        permiso_op = false;
                        permiso_res = false;
                        permiso_tecla = true;
                    }
                    break;
                case '*':
                    console.log("*");
                    if (digitos.value.length > 0 && permiso_op == true) {
                        digitos.value = digitos.value + '*';
                        num = num + '*';
                        permiso_op = false;
                        permiso_res = false;
                        permiso_tecla = true;
                    }
                    break;
                case '/':
                    console.log("/");
                    if (digitos.value.length > 0 && permiso_op == true) {
                        digitos.value = digitos.value + '÷';
                        num = num + '/';
                        permiso_op = false;
                        permiso_res = false;
                        permiso_tecla = true;
                    }   
                    break;
                case 'c':
                    console.log("c");
                    digitos.value = '';
                    permiso_op = false;
                    permiso_res = false;
                    permiso_tecla = true;
                    num = '';
                    break;
                case 'Backspace':
                    console.log("Backspace");
                    digitos.value = digitos.value.substring(0, digitos.value.length - 1);
                    num = num.substring(0, num.length - 1);
                    break;
                default:
                    console.log("tecla no permitida");
                    break;
            }
          }, false);
    } catch (error) {
        alert("Error al cargar la calculadora " + error);
    }
}