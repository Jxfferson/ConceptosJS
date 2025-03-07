//Declaramos variables e imprimimos
var nombre = 'Jefferson';
//Le pedimos a la consola que imprima la variable nombre
console.log(nombre);
//Pedimos que nos muestre en la consola de que tipo es la variable
console.log(typeof(nombre));

//Declaramos la variable edad
var edad = 17;
//Le pedimos a la consola que imprima la variable edad
console.log(edad);
//Pedimos que nos muestre en la consola de que tipo es la variable
console.log(typeof(edad));


/* De esa forma podemos cambiar la manera de como se interpreta la variable, en este caso la vaiable edad como principio era numera, con este cambio cambiaria a ser string 
edad = 'diecisiete';
console.log(edad);
console.log(typeof(edad));
*/

//Declaramos la variable salario
var salario = 1900000.99;
//Le pedimos a la consola que imprima la variable salario
console.log(salario);

//Pedimos que nos muestre en la consola de que tipo es la variable
console.log(typeof(salario));

var profesional = true;
//Le pedimos a la consola que imprima la variable profesional
console.log(profesional);
//Pedimos que nos muestre en la consola de que tipo es la variable
console.log(typeof(profesional));

var profesion;
console.log(profesion);

//Declaramos la variable cargo
var cargo = null;
console.log(cargo);
//Pedimos que nos muestre en la consola de que tipo es la variable
console.log(typeof(cargo));

//Operadores matematicos

//De esa forma podemos declarar varias variables
var edadAlberto, edadRicardo, edadPaola, edadXiomara, edadJefferson;
var totalEdades, fechaAlberto, fechaRicardo, fechaPaola, fechaXiomara, fechaJefferson;
//Declaramos la variable para calcular la diferencia de edades
var diferenciaEdad;
//Declaramos la variable para saber la fecha de nacimiento
var Presente;

//Declaciòn de las variables

edadAlberto = 50;
edadPaola = 45;
edadRicardo = 37;
edadXiomara = 40;
edadJefferson = 18;
//Declaramos el valor de la variable presente
presente = 2025;

//Calculamos la diferencia de Alberto y Xiomara
diferenciaEdad = edadAlberto - edadXiomara;
//Insertamos el texto de la respuesta
console.log('La diferencia de edad entre Alberto y Xiomara es de : ');
//Llamamos la variable
console.log(diferenciaEdad);

//Calculamos la diferencia de edad Ricardo y Paola

diferenciaEdad = edadPaola - edadRicardo;
//Insertamos el texto de la respuesta
console.log('La diferencia de edad entre Ricardo y Paola es de : ');
//Llamamos la variable
console.log(diferenciaEdad);

//Hallamos la fecha de nacimiento de cada uno

//Calcular la fecha de nacimiento restando el valor presente con la edad de Alberto
fechaAlberto = presente - edadAlberto;
//Le pedimos a la consola que imprima el siguente texto
console.log('El año de nacimiento de Alberto es :');
//Le pedimos a la consola que imprima la variable fechaAlberto
console.log(fechaAlberto);

//Calcular la fecha de nacimiento restando el valor presente con la edad de Paola
fechaPaola = presente - edadPaola;
//Le pedimos a la consola que imprima el siguente texto
console.log('El año de nacimiento de Alberto es :');
//Le pedimos a la consola que imprima la variable fechaPaola
console.log(fechaPaola);

//Calcular la fecha de nacimiento restando el valor presente con la edad de Ricardo
fechaRicardo = presente - edadRicardo;
//Le pedimos a la consola que imprima el siguente texto
console.log('El año de nacimiento de Alberto es :');
//Le pedimos a la consola que imprima la variable fechaXiomara
console.log(fechaRicardo);

//Calcular la fecha de nacimiento restando el valor presente con la edad de Xiomara
fechaXiomara = presente - edadXiomara;
//Le pedimos a la consola que imprima el siguente texto
console.log('El año de nacimiento de Alberto es :');
//Le pedimos a la consola que imprima la variable fechaXiomara
console.log(fechaXiomara);

//Calcular la diferencia de la edad de Paola y la mia restando los valores

diferenciaEdad = edadPaola - edadJefferson;
//Le pedimos a la consola que imprima el siguente texto
console.log('La diferencia de edad entre Paola y Jefferson es de : ');
//Le pedimos a la consola que imprima la variable diferenciaEdad
console.log(diferenciaEdad);


//Hallamos la fecha de mi nacimiento 

fechaJefferson = presente - edadJefferson;
//Le pedimos a la consola que imprima el siguente texto
console.log('El año de nacimiento de Jefferson es : ');
//Le pedimos a la consola que imprima la variable fechaJefferson
console.log(fechaJefferson);


//Le pedimos a la variable totalEdades que haga la suma  de todas las edades
totalEdades = (edadAlberto + edadPaola + edadRicardo + edadXiomara + edadJefferson);
//Le pedimos a la consola que imprima el siguente texto
console.log('La suma total de todas las edades es de : ');
//Le pedimos a la consola que imprima la variable totalEdades
console.log(totalEdades);

// Operaciones matematicas part 1

var num1 = 10 //Le asignamos un valor a la variable num1
var num2 = 50 //Le asignamos un valor a la variable num2
var num3; //Declaramos la variable num3
var num4; //Declaramos la variable num4 

console.log ('el num1 es :' + num1)
console.log('El num2 es :' + num2)

//se dividen dos numeros con / que seria 10 y 50
num4 = num2/num1; //Le asignamos la siguente operación a la variable num4
console.log('num2 / num1: ' + num4);
num3= 9 * num1; //Le asignamos la siguente operación a la variable num
console.log('9 * num1 es: ' + num3);

// Operaciones matematicas part 2

var num5 = 5, num6 = 10, num7 = 3; 
var num8; //Declaramos la variable num8
var num9; //Declaramos la variable num9
var num10; //Declaramos la variable num10


//num 8 toma el valor del resultado de esta operacion
num8 = 5 + 10 * 3; //Le asignamos la siguente operación a la variable num8
console.log('5 + 10 * 3 es: ' + num8);

//50 se divide en 9 mustiplicado por 10
num9 = num2 / 9 * num1; //Le asignamos la siguente operación a la variable num9
console.log('50/5*18 es:' + num9);

//se suma 50 + 10 y se divide en el resultado de 8+2
num10 = num2 + num1 / 8 +2; //Le asignamos la siguente operación a la variable num10
console.log('50 + 10 / 8*2 es: ' + num10);

// Operaciones matematicas part 3

var num11; 

//num2 se suma con num1, se suma 8+2 y se dividen los valores de estos

num11 = (num2 + num1) / (8 +2);
console.log('(50 + 10) / (8 +2) es: ' + num11)

/*operadores logicos = comparacion
mayor que >
menor que <
mayor igual >=
menor igual <=
igual ==  es doble == para no darle un valor a la variable 
*/

//se denominan las variables
var num1 = 8;
var num2 = 100;
var num3 = 1
var num0 = 0

//comparacion entre 8 es menor 100
var compara = num1 < num2;
console.log('¿8 es menor que 100?: ' + compara);

/*Ejercicios 
// comparacion entre 8 es menor 100
*/

var compara = num1 < num2;
console.log ('¿8 es menor que 100?: ' + compara);

// comparar si 8 es mayor o igual a 100
var compara = num1 >= num2;
console.log ('¿8 es mayor o igual que 100?: ' + compara);

//comparar si 100 es menor que 0
var compara = num2 < num0;
console.log ('¿100 es menor que 0?: ' + compara);

//comparar si 100 es igual a 100
var compara = num2 >= num2;
console.log ('¿100 es igual que 100?: ' + compara);

// comparar si 1 es menor que 8
var compara = num6 < num1;
console.log ('¿compara si 1 es menor que 8?: ' + compara);
/* operadores unrios 

++ incremento
--decremento

*/

edadPaola;
edadRicardo;
//edadPaola se le encrementa 1 con ++ 
edadPaola++;
console.log('La nueva edad de paola es: ' + edadPaola);
//edadPaola se le decrementa 1 con --
edadRicardo--;
console.log('La nueva edad de ricardo es: ' + edadRicardo);

//peraciones operadores unarios

//aplicarlo con en el console.log

/*
aplicarlo despues de la variable 
reliza el aumento pero no lo mostrara, mostrara el valor de la edad antes de el incremento
*/
console.log(edadAlberto++);

console.log(edadAlberto); //Haciedo en nueva console.log  despues del anterior si mostrara el cambia

/*Aplicarlo antes del nombre de la variable
realize el aumento y lo muestra*/
console.log(++edadAlberto);
console.log(--edadXiomara);

/* Operadores de asignacion

+=, -=, /=, %=

*/

var a=15; //Declaramos la variable a y le asignamos un valor
var b=5; //Declaramos la variable b y le asignamos un valor
a = a + b; //Le reasignamos un nuevo valor a la variable a donde le decimos que sume 5 
console.log(a);

//ASIGNA EL VALOR DE LA VARIABLE "A"
//tomando su valor actual y sumando "b"

a+=b;
console.log(a);

//ASIGNA EL VALOR DE LA VARIABLE "b"
//tomando su valor actual y sumando "a"

b+=a;
console.log(b);

//Ahora veremos algunas cosas sobre el if, else y los operadores logicos

//Ejecuta una sentencia si una condiciòn especificada es evaluada como verdadera. Si la condicion es evaluada como falsa otra sentencia puede ser ejecutada

/Ejemplo/
var nombre = 'Paola'; //Declaramos la variable nombre dandole el valor de Paola y como string
var estadoCasada = 'true'; //Declaramos la variable estadoCasada como booleano
var profesion = 'Ingeniera'; //Declaramos la variable profesión como string y le asiganmos su respectivo valor
var maestria = 'Ciencia de datos'; //Declaramos la variable maestria como string y le asiganmos su respectivo valor
var estadoGradoMaestria = true; //Declaramos la variable estadoGradoMaestria como booleano 

if (estadoCasada == true ){ //Le decimos que compare los valores de las variables, en este caso usamos dos == para que los compare, ya que con 1 solo seria para definir algo
   console.log(nombre + 'Esta casad@'); //En caso de que sea verdadero la consola va a imprimir ese mensaje
}

//Ejemplo if .... else
if (estadoGradoMaestria == true){ //Le pedimos que compare el valor de estadoGradoMaestria que en este caso es false, como nos dice que si llega a ser if mostrara el mensaje donde diga que paola esta graduada de la maestria
    console.log('La ' + profesion + ' ' + nombre + ' esta graduada en la maestria de ' + maestria); //Imprimimos el valor en caso de que el valor sea if
} else{ //Aca decimos que en caso de que sea else, el mensaje que mostrara sera Aun esta cursando su maestria, lo que es correcto, ya que al declarar la variable estadoGradoMaestria es false
    console.log('La ' + profesion + ' ' + nombre + ' aún esta cursando su maestria en ' + maestria); //Imprimimos el valor en caso de que el valor sea else
} 

//Ejercicio 1

var nombre = 'Ricardo'; //Declaramos la variable nombre y le damos el valor Ricardo
var profesion = 'Profesor'; //Declaramos la variable profesion y le damos el valor Profesor
var validarProfesion= true; //Declaramos la variable validarProfesion y lo agregamos como booleano

if (validarProfesion == true ){ //Si la variable validarProfesion es true el mensaje sera el de que imprimimos en la consola
    console.log('La profesion actual de ' + nombre + ' es ' + profesion); //Imprimimos en la consola el resultado acerca de la profesion de Ricardo
}


//Ejercicio 2
var nombre = 'Luis'; //Declaramos la variable nombre y le asignamos el valor nombre Luis
var soltero = 'Soltero'; //Declaramos la variable soltero y le asignamos el valor Soltero
var casado = 'Casado'; //Declaramos la variable casado y le asiganmos el valor casado
var estadocivil = false //Declaramos la variable estadocivil como booleano y le damos false como valor booleano
if (estadocivil == true ){ //Ponemos la condición que si estado civil es true dira que el estado civil es casado
    console.log('El estado civil de ' + nombre + ' es' + ' ' + casado); //Imprimimos el resultado en caso de que sea true
} else { //En caso de que el resultado sea false, va a imprimir el mensaje donde diga que esta soltero
    console.log('El estado civil de ' + nombre + ' es' + ' ' + soltero); //Imprimimos el resultado en caso de que sea false
}

//Ejercicio 3
var num1 = 7; //Declaramos la variable num1 y le asignamos el valor 7
var num2 = 8; //Declaramos la variable num2 y le asignamos el valor 8
var num3 = 911; //Declaramos la variable num3 y le asignamos el valor 911
var num4 = 100; //Declaramos la variable num4 y le asignamos el valor 100

if(num1%2==0){ //Le decimos que en la condición para ver si el numero es par o impar, en este caso dividimos el numero entre 2, y si el residuo es igual a 0, el numeria seria par
    console.log("El numero " + num1 + "es par"); //En caso de que el residuo sea 0 el numero sera par
} else {
    console.log("El numero " + num1 + " es impar"); //En caso de que el residuo sea 1 el numero sera impar
}
if(num2%2==0){ //Le decimos que en la condición para ver si el numero es par o impar, en este caso dividimos el numero entre 2, y si el residuo es igual a 0, el numeria seria par
    console.log("El numero " + num2 + " es par"); //En caso de que el residuo sea 0 el numero sera par
} else {
    console.log("El numero " + num2 + " es impar"); //En caso de que el residuo sea 1 el numero sera impar
}
if(num3%2==0){ //Le decimos que en la condición para ver si el numero es par o impar, en este caso dividimos el numero entre 2, y si el residuo es igual a 0, el numeria seria par
    console.log("El numero " + num3 + " es par"); //En caso de que el residuo sea 0 el numero sera par
} else {
    console.log("El numero " + num3 + " es impar"); //En caso de que el residuo sea 1 el numero sera impar
}
if(num4%2==0){ //Le decimos que en la condición para ver si el numero es par o impar, en este caso dividimos el numero entre 2, y si el residuo es igual a 0, el numeria seria par
    console.log("El numero " + num4 + " es par"); //En caso de que el residuo sea 0 el numero sera par
} else {
    console.log("El numero " + num4 + " es impar"); //En caso de que el residuo sea 1 el numero sera impar
}

//Operadores logicos
/*
AND = Y && = Cuando yo valido mas de una condición ambas validaciones o las que tengan todas deben ser verdaderos para ser verdaderos, si la primer condición es falsa y la segunda verdadera siempre sera falso. V V = V | Conjunción
OR = O || = Es lo contrario a AND, la condición es que si los dos son falsas, todos seran falsos, un ejemplo cuando devuelva un false sera que ambos sean falsos F F = F | Disyunción
NOT = NO ! = Tiene dos funciones, la primera es hacer negación, si un resultado me dio como resultado un true y lo usamos nos daria como resultado un false, la otra es ayudarnos a hacer validaciones (diferente de), un ejemplo podria ser, traigame algo que sea diferente a AMARILLO, puede cambiar el resultado de una operación BOOLEANA, es decir para crear un filtro sobre algo. | Negación

*/

/*Ejercicio
Escenario 1
Para poder ir a cine necesitamos de dos cosas primero tener una entrada y la otra llegar al cine a tiempo (&& = And = y)*/

var e1Entrada = true; //Declaramos como booleano la variable
var e1Transporte = false; //Declaramos como booleano la variable
if((e1Entrada == true) && (e1Transporte == true)){ //Aca estamos haciendo uso del operador logico AND, donde habiamos dicho que si ambas eran verdaderos iba a ser verdadero pero si algun valor booleano llegaba a ser falso el valor sera falso
    console.log('¡Vamos a cine!'); //Imprimimos el mensaje en caso de que ambos sean true
} else { //Como en este caso e1Transporte es false el resultado en la consola sera else
    console.log('No puedes ir a cine:('); //Imprimimos el mensaje en caso de que ambos sean false
}
/* Escenario 2
No teniamos dinero para la entrada ni para el transporte */

var e2Entrada = false; //Declaramos la la variable e2Entrada como false
var e2Transporte = false; //Declaramos la la variable e2Transporte como false

if((e2Entrada == true) && (e2Transporte == true)){ //El operador logico que usamos es && entonces para que el valor sea if ambas variables tienen que ser true, como en este caso ambos son false el resultado sera el else
    console.log('¡Vamos para cine!'); //Imprimimos el mensaje en caso de que ambos sean true
} else { //Como en este caso ambas variables son false el resultado que ejecutara la consola sera else
    console.log ('No puedes ir a cine:('); //Imprimimos el mensaje en caso de que ambos sean false
}

/* Escenario 3 
Pudimos llegar al cine, pero las entradas estaban agotadas */

var e3Entrada = false; //Declaramos la variable e3Entrada como false
var e3Transporte = true; //Declaramos la variable e3Transporte como true

if((e2Entrada == true) && (e2Transporte == true)){ //El operador logico que usamos es && entonces para que el valor sea if ambas variables tienen que ser true, como en este caso e3Entrada es false el resultado que ejecutara sera el else
    console.log('!Vamos para cine¡'); //En caso de que ambos sean true ejecutara el if y imprimira el resultado
} else { //Como en este caso e3Entrada es false el resultado que ejecutara la consola sera else
    console.log('Es muy triste, pero aun no puedes ir a cine'); //En caso de que alguna sea false ejecutara else
}

/* Escenario 4
Compramos la entrada por la pagina, y llegamos a tiempo al cine */

var e4Entrada = true;
var e4Transporte = true;

if((e4Entrada == true ) && (e4Transporte == true)){ //El operador logico que usamos es && entonces para que el valor sea if ambas variables tienen que ser true, como en este caso ambos son true ejecutara el if
    console.log('!Iremos para el cine¡'); //En caso de que ambos sean true ejecutara el if y imprimira el resultado
} else { //Como en este caso ambos son true el resultado que ejecutara la consola sera if
    console.log('No iremos a cine'); //En caso de que alguna sea false ejecutara else
}

/* Ejercicio 
Los vendedores reciben un bono de acuerdo  asu desempeño en las ventas al final de mes, si los 5 millones en ventas o consiguen mas liente, ganaron 500.000 de bono (|| = Or = o)
Escenario 1 
No hay clientes nuevos pero se vendieron $6.500.000*/

var e1Venta = 6500000; //Declaramos la variable como int
var e1ClienteNuevo = false; //Declaramos la variable como booleano
var bono = 500000; //Declaramos la variable como int

if((e1Venta > 5000000 ) || (e1ClienteNuevo == true)){ //Le pedimos que cree la condición de si la venta mensual es mayor a 5 millones sera true o si hay cliente nuevo, como OR es que si al menos 1 condición es true este ejecutara el if, en caso de que ambas sean false o no cumplan con las condición ejecutara else
    console.log('El vendedor tendrá una bonificación de $' + bono); //Imprimimos el mensaje de if en caso de que alguna función se cumpla
} else { //En que caso de que ninguna condición se cumpla se ejecutara la función else
    console.log('El vendendor no tendra boinificacion este mes '); //Imprimimos el mensaje de else en caso de que ninguna se cumpla
}

/* 
Escenario 2 
Se consiguieron 2 clientes nuevos, pero las ventas fueron de $4.500.000*/

var e2Venta = 4500000; //Declaramos la variable como int
var e2ClienteNuevo = true; //Declaramos la variable como booleano

if((e2Venta > 5000000 ) || (e2ClienteNuevo == true )){ //Le pedimos que cree la condición de si la venta mensual es mayor a 5 millones sera true o si hay cliente nuevo, como OR es que si al menos 1 condición es true este ejecutara el if, en caso de que ambas sean false o no cumplan con las condición ejecutara else
    console.log('El vendedor tendrá una bonificación de $' + bono); //Imprimimos el mensaje de if en caso de que alguna función se cumpla
} else { //En que caso de que ninguna condición se cumpla se ejecutara la función else
    console.log('El vendendor no tendra boinificacion este mes '); //Imprimimos el mensaje de else en caso de que ninguna se cumpla
}

/*Escenario 3
Tenemos cliente nuevos y se vendieron $10.000.000*/

var e3Venta = 10000000; //Declaramos la variable como int
var e3ClienteNuevo = true; //Declaramos la variable como booleano

if((e3Venta > 5000000 ) || (e3ClienteNuevo == true )){ //Le pedimos que cree la condición de si la venta mensual es mayor a 5 millones sera true o si hay cliente nuevo, como OR es que si al menos 1 condición es true este ejecutara el if, en caso de que ambas sean false o no cumplan con las condición ejecutara else
    console.log('El vendedor tendrá una bonificación de $' + bono); //Imprimimos el mensaje de if en caso de que alguna función se cumpla
} else { //En que caso de que ninguna condición se cumpla se ejecutara la función else
    console.log('El vendendor no tendra boinificacion este mes '); //Imprimimos el mensaje de else en caso de que ninguna se cumpla
}
/*Escenario 4
No hay clientes nuevos y sólo se vendio $1.500.000*/
var e4Venta = 1500000; //Declaramos la variable como int
var e4ClienteNuevo = false; //Declaramos la variable como booleano

if((e4Venta > 5000000 ) || (e4ClienteNuevo == true )){ //Le pedimos que cree la condición de si la venta mensual es mayor a 5 millones sera true o si hay cliente nuevo, como OR es que si al menos 1 condición es true este ejecutara el if, en caso de que ambas sean false o no cumplan con las condición ejecutara else
    console.log('El vendedor tendrá una bonificación de $' + bono); //Imprimimos el mensaje de if en caso de que alguna función se cumpla
} else { //En que caso de que ninguna condición se cumpla se ejecutara la función else
    console.log('El vendendor no tendra boinificacion este mes '); //Imprimimos el mensaje de else en caso de que ninguna se cumpla
}

/*Negació 
Dadas las variables del tipo entero con valores a = true, b = false,
indicar si la evaluación de estas expresiones darian como resultado veradero o falso aplicando la negacion ! = Not = N o */
 
var a = true; //Declaramos los valores booleanos para hacer el uso de NOT intercambiando su valor
var b = false; //Declaramos los valores booleanos para hacer el uso de NOT intercambiando su valor

console.log('Inicialmente la variable a es ' + a); //Imprimimos el valor incial de a

a=!a //Con el uso de los operadores logicos el valor de a cambiaria a false
console.log('Aplicando el NOT-- la variable "a" cambiaria a ' + a); //Imprimimos el valor por el cual se le cambio la a


//Ahora con b
console.log('Inicialmente la variable b es ' + b); //Imprimimos el valor incial de b

b=!b //Con el uso de los operadores logicos el valor de b cambiaria a false
console.log('Aplicando el NOT-- la variable "b" cambiaria ' + b); //Imprimimos el valor por el cual se le cambio la b
