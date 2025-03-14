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

/*Negación 
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

//Ejercicio
//Los empleados recibiran un bono extra si trabajan al menos 10 domingos al año
//usar un operador not para lograr el resultado correcto (! = Not = No)

/*
Ernesto trabajo 12 domingos
Claudia trabajo 9 domingos 
Miguel trabajo 20 domingos
Andrea no trabajo ningun domingo
 */

//Solución
var ernesto = 12; //Creamos las variables con los valores de los domingos trabajados
var claudia = 9; //Creamos las variables con los valores de los domingos trabajados
var miguel = 20; //Creamos las variables con los valores de los domingos trabajados
var andrea = 0; //Creamos las variables con los valores de los domingos trabajados

var recibenBono = "";  // Guardará los empleados que reciben bono
var noRecibenBono = ""; // Guardará los empleados que no reciben bono

if (!(ernesto < 10)) { 
    /*Aca usamos la opcion para filtrar los dias trabajados, 
    entonces si el valor es menor a 10 no recibira bono y en este caso sera true, que seria no recibe bono, 
    pero ¿porque true?, como habiamos dicho la otra función de not es invertir resultado, entonces, ese true cambiaria a false,
    por lo que como resultado final seria que Ernesto si recibo bono!
   */
if (recibenBono !== "") recibenBono += ", "; //En caso de cumplirse la condicion con las variables que creamos para guardar a los empleados agregariamos a ernesto
//Pero hay que aclarar que aun no se ejecuta por esta vacio
recibenBono += "Ernesto";//Se agrega "Ernesto"
} else {
    if (noRecibenBono !== "") noRecibenBono += ", "; //En caso de no cumplor lo que hara es enviar ese nombre a la variable no reciben bono
    noRecibenBono += "Ernesto";
}
if (!(claudia < 10)) {
    if (recibenBono !== "") recibenBono += ", "; // Se ejecuta, porque ya hay un nombre
    recibenBono += "Claudia"; 
} else {
    if (noRecibenBono !== "") noRecibenBono += ", ";
    noRecibenBono += "Claudia"; //En caso de no cumplir lo que hara es enviar ese nombre a la variable no reciben bono
}

if (!(miguel < 10)) {
    if (recibenBono !== "") recibenBono += ", ";
    recibenBono += "Miguel";//Como el primer resultado fue Ernesto,ya que cumplio, entonces ahora la variable recibenBono quedaria con el nombre de Ernesto y Miguel
} else {
    if (noRecibenBono !== "") noRecibenBono += ", ";
    noRecibenBono += "Miguel"; ///En caso de no cumplir lo que hara es enviar ese nombre a la variable no reciben bono
}

if (!(andrea < 10)) {
    if (recibenBono !== "") recibenBono += ", ";
    recibenBono += "Andrea";
} else {
    if (noRecibenBono !== "") noRecibenBono += ", ";
    noRecibenBono += "Andrea"; //En caso de no cumplir lo que hara es enviar ese nombre a la variable no reciben bono
}


if (recibenBono === "") { //aca se verifica que la lista esta vica, si esta vacia imprime que ningun empleado recibira bono, pero si tiene nombre como es nuestro caso va a imprimir la lista de empleados
    console.log("Empleados que reciben bono: Ninguno"); //Le pedimos a la consola que imprima el mensaje en caso de ser if
} else {
    console.log("Empleados que reciben bono: " + recibenBono); //Le pedimos a la consola que imprima el mensaje en caso de ser else, por otro lado concatenamos y traemos la lista de los trabajadores que reciben bono.
}

if (noRecibenBono === "") { //Hace lo mismo pero con aquellos empleados que determinamos que NO tienen bono,
    console.log("Empleados que NO reciben bono: Ninguno"); //Le pedimos a la consola que imprima el mensaje en caso de ser if, pero como en este caso dos empleados no reciben bono se ejecutara esta.
} else {
    console.log("Empleados que NO reciben bono: " + noRecibenBono); //Le pedimos a la consola que imprima el mensaje en caso de ser else y usamos el + para concatenar la lista de los trabajadores que no reciben bono
}

//IF ANIDADOS
//Estructura que permite poner una condición dentro de otra condicion, puede estar dentro de un if o un else, lom comun es nidarlo desde el false

//Primer ejercicio

/*Pablo tiene 10 años
Gabriel tiene 65 años
Carlos tiene 18 años
Henry tiene 45 años
Andrea tiene 15 años
*/
/* Condiciones
-Niño hasta los 10 
-Adolescente hasta los 17 años
-Adulto desde 18 años hasta los 59 años
-Adulto mayor a partir de los 60 años en adelante*/

var edadPablo = 24;//Declaramos las variables y le asignamos valor en base al enunciado
var edadGabriel = 95;//Declaramos las variables y le asignamos valor en base al enunciado 
var edadCarlos = 1;//Declaramos las variables y le asignamos valor en base al enunciado
var edadHenry = 17.5;//Declaramos las variables y le asignamos valor en base al enunciado
var edadAndrea = 59.9;//Declaramos las variables y le asignamos valor en base al enunciado

if(edadPablo <= 10){ //En este caso creamos la condición de que si pablo tiene 10 es menos años sera un niño
    console.log('Pablo es un niño'); //Imprimimos el resultado
} else if ((edadPablo >10) && (edadPablo <18)){ /* En caso de no ser cumplida la primer condicion usamos nuestro primer if aninadado
    Entonces, si no llega a ser un niño iniciaremos la siguente condición,
    Si pablo tiene mas de 10 y menos de 18 años sera considerado un adolescente*/
    console.log('Pablo es un adolescente'); //Imprimimos el resultado
} else if ((edadPablo >=18) && (edadPablo <60)){ /* Si no se llega a cumplir
    Entonces iniciaremos la siguente condición, donde dice que si pablo tiene 18 o mas años y es menor a 60 años, sera considerado un adulto*/
    console.log('Pablo es un adulto'); //Imprimimos el resultado
} else if ((edadPablo >=60)){ //Y la ultima seria como adulto mayor, aca solo pedimos que realice una investigación, ya que los adultosmayores son desde los60 años.
    console.log('Pablo es una persona mayor'); //Imprimimos el resultado
}

if(edadGabriel <= 10){ //En este caso creamos la condición de que si pablo tiene 10 es menos años sera un niño
    console.log('Gabrielo es un niño'); //Imprimimos el resultado
} else if ((edadGabriel >10) && (edadGabriel <18)){ /* En caso de no ser cumplida la primer condicion usamos nuestro primer if aninadado
    Entonces, si no llega a ser un niño iniciaremos la siguente condición,
    Si pablo tiene mas de 10 y menos de 18 años sera considerado un adolescente*/
    console.log('Gabriel es un adolescente'); //Imprimimos el resultado
} else if ((edadGabriel >=18) && (edadGabriel <60)){ /* Si no se llega a cumplir
    Entonces iniciaremos la siguente condición, donde dice que si pablo tiene 18 o mas años y es menor a 60 años, sera considerado un adulto*/
    console.log('Gabriel es un adulto'); //Imprimimos el resultado
} else if ((edadGabriel >=60)){ //Y la ultima seria como adulto mayor, aca solo pedimos que realice una investigación, ya que los adultosmayores son desde los60 años.
    console.log('Gabriel es una persona mayor'); //Imprimimos el resultado
}

if(edadCarlos <= 10){ //En este caso creamos la condición de que si pablo tiene 10 es menos años sera un niño
    console.log('Carlos es un niño'); //Imprimimos el resultado
} else if ((edadCarlos >10) && (edadCarlos <18)){ /* En caso de no ser cumplida la primer condicion usamos nuestro primer if aninadado
    Entonces, si no llega a ser un niño iniciaremos la siguente condición,
    Si pablo tiene mas de 10 y menos de 18 años sera considerado un adolescente*/
    console.log('Carlos es un adolescente'); //Imprimimos el resultado
} else if ((edadCarlos >=18) && (edadCarlos <60)){ /* Si no se llega a cumplir
    Entonces iniciaremos la siguente condición, donde dice que si pablo tiene 18 o mas años y es menor a 60 años, sera considerado un adulto*/
    console.log('Carlos es un adulto'); //Imprimimos el resultado
} else if ((edadCarlos >=60)){ //Y la ultima seria como adulto mayor, aca solo pedimos que realice una investigación, ya que los adultosmayores son desde los60 años.
    console.log('Carlos es una persona mayor'); //Imprimimos el resultado
}

if(edadHenry <= 10){ //En este caso creamos la condición de que si pablo tiene 10 es menos años sera un niño
    console.log('Henry es un niño'); //Imprimimos el resultado
} else if ((edadHenry >10) && (edadHenry <18)){ /* En caso de no ser cumplida la primer condicion usamos nuestro primer if aninadado
    Entonces, si no llega a ser un niño iniciaremos la siguente condición,
    Si pablo tiene mas de 10 y menos de 18 años sera considerado un adolescente*/
    console.log('Henry es un adolescente'); //Imprimimos el resultado
} else if ((edadHenry >=18) && (edadHenry <60)){ /* Si no se llega a cumplir
    Entonces iniciaremos la siguente condición, donde dice que si pablo tiene 18 o mas años y es menor a 60 años, sera considerado un adulto*/
    console.log('Henry es un adulto'); //Imprimimos el resultado
} else if ((edadHenry >=60)){ //Y la ultima seria como adulto mayor, aca solo pedimos que realice una investigación, ya que los adultosmayores son desde los60 años.
    console.log('Henry es una persona mayor'); //Imprimimos el resultado
}

if(edadAndrea <= 10){ //En este caso creamos la condición de que si pablo tiene 10 es menos años sera un niño
    console.log('Andrea es un niño'); //Imprimimos el resultado
} else if ((edadAndrea >10) && (edadAndrea <18)){ /* En caso de no ser cumplida la primer condicion usamos nuestro primer if aninadado
    Entonces, si no llega a ser un niño iniciaremos la siguente condición,
    Si pablo tiene mas de 10 y menos de 18 años sera considerado un adolescente*/
    console.log('Andrea es un adolescente'); //Imprimimos el resultado
} else if ((edadAndrea >=18) && (edadAndrea <60)){ /* Si no se llega a cumplir
    Entonces iniciaremos la siguente condición, donde dice que si pablo tiene 18 o mas años y es menor a 60 años, sera considerado un adulto*/
    console.log('Andrea es una adulta'); //Imprimimos el resultado
} else if ((edadAndrea >=60)){ //Y la ultima seria como adulto mayor, aca solo pedimos que realice una investigación, ya que los adultosmayores son desde los60 años.
    console.log('Andrea es una persona mayor'); //Imprimimos el resultado
}

//Ejercicio 2
/*

Luis : 5
Carlos : 9.5
Camila : 6.9 
Ricardo : 8
Luisa : 9.2
Andres : 3

Entre 0 y 3 : Muy deficiente
Mas de 3 pero menor a 5 : Insuficiente
Entre 5 y 6 : Suficiente
Mas de 6 pero menor a 7 : Bien
Entre 7 y 9 : Notable
Mas de 9 y hasta 10 : Sobresaliente

 */
//Declaramos variables y su valor
var Luis = 5;
var Carlos = 9.5;
var Camila = 6.9;
var Ricardo = 8;
var Luisa = 9.2;
var Andres = 3;

/*Nota Luis*/

if((Luis >=0) && (Luis <= 3)){ //Volvemos a hacer el ejercicio anterior pero esta vez en base a la forma en que se saca las nota de los estudiantes
    //Ahi nos dice que mientras la nota sea igual o mayor  0 y menor o igual a 3 la nota sera muy deficiente.
    console.log("En base a la nota de Luis su resultado es : Muy deficiente"); //Se imprime en caso de que sea la nota del estudiante
} else if((Luis > 3) &&(Luis <  5)){ //nos dice que mientras la nota sea mayor a 3 y menor a 5 la nota sera Insuficiente
    console.log('En base a la nota de Luis su resultado es : Insuficiente'); //Se imprime en caso de que sea la nota del estudiante
} else if((Luis >=5) && (Luis <=6)){ //nos dice que mientras la nota sea igual o mayor  a 5 y menor o igual a 6 la nota sera suficiente
    console.log('En base a la nota de Luis su resultado es : Suficiente.'); //Se imprime en caso de que sea la nota del estudiante
} else if((Luis >6) && (Luis <7)){ //nos dice que mientras la nota sea mayor a 5 y menor a 5 la nota sera suficiente bien
    console.log('En base a la nota de Luis su resultado es : Bien'); //Se imprime en caso de que sea la nota del estudiante
} else if((Luis >=7) && (Luis <=9)){ //nos dice que mientras la nota sea mayor o igual a 7 y menor o igual a 9 la nota sera notable
    console.log('En base a la nota de Luis su resultado es : Notable'); //Se imprime en caso de que sea la nota del estudiante
} else if((Luis >9) && (Luis <=10)){ //Nos dice que mientras la nota sea mayor a 9 y menor o igual a 10 la nota sera sobresaliento
    console.log('En base a la nota de Luis su resultado es : Sobresaliente');//Se imprime en caso de que sea la nota del estudiante
}


/*Nota Carlos*/

if((Carlos >=0) && (Carlos <=3)){ //Volvemos a hacer el ejercicio anterior pero esta vez en base a la forma en que se saca las nota de los estudiantes
    //Ahi nos dice que mientras la nota sea igual o mayor  0 y menor o igual a 3 la nota sera muy deficiente.
    console.log("En base a la nota de Carlos su resultado es : Muy deficiente"); //Se imprime en caso de que sea la nota del estudiante
} else if((Carlos > 3) &&(Carlos <5)){ //nos dice que mientras la nota sea mayor a 3 y menor a 5 la nota sera Insuficiente
    console.log('En base a la nota de Carlos su resultado es : Insuficiente'); //Se imprime en caso de que sea la nota del estudiante
} else if((Carlos >=5) && (Carlos <=6)){ //nos dice que mientras la nota sea igual o mayor  a 5 y menor o igual a 6 la nota sera suficiente
    console.log('En base a la nota de Carlos su resultado es : Suficiente.'); //Se imprime en caso de que sea la nota del estudiante
} else if((Carlos >6) && (Carlos <7)){ //nos dice que mientras la nota sea mayor a 5 y menor a 5 la nota sera suficiente bien
    console.log('En base a la nota de Carlos su resultado es : Bien'); //Se imprime en caso de que sea la nota del estudiante
} else if((Carlos >=7) && (Carlos <=9)){ //nos dice que mientras la nota sea mayor o igual a 7 y menor o igual a 9 la nota sera notable
    console.log('En base a la nota de Carlos su resultado es : Notable'); //Se imprime en caso de que sea la nota del estudiante
} else if((Carlos >9) && (Carlos <=10)){ //Nos dice que mientras la nota sea mayor a 9 y menor o igual a 10 la nota sera sobresaliento
    console.log('En base a la nota de Carlos su resultado es : Sobresaliente'); //Se imprime en caso de que sea la nota del estudiante
}


/*Nota Camila*/

if((Camila >=0) && (Camila <=3)){ //Volvemos a hacer el ejercicio anterior pero esta vez en base a la forma en que se saca las nota de los estudiantes
    //Ahi nos dice que mientras la nota sea igual o mayor  0 y menor o igual a 3 la nota sera muy deficiente.
    console.log("En base a la nota de Camila su resultado es : Muy deficiente"); //Se imprime en caso de que sea la nota del estudiante
} else if((Camila > 3) && (Camila < 5)){ //nos dice que mientras la nota sea mayor a 3 y menor a 5 la nota sera Insuficiente
    console.log('En base a la nota de Camila su resultado es : Insuficiente'); //Se imprime en caso de que sea la nota del estudiante
} else if((Camila >=5) && (Camila <=6)){ //nos dice que mientras la nota sea igual o mayor  a 5 y menor o igual a 6 la nota sera suficiente
    console.log('En base a la nota de Camila su resultado es : Suficiente.'); //Se imprime en caso de que sea la nota del estudiante
} else if((Camila >6) && (Camila <7)){ //nos dice que mientras la nota sea mayor a 5 y menor a 5 la nota sera suficiente bien
    console.log('En base a la nota de Camila su resultado es : Bien'); //Se imprime en caso de que sea la nota del estudiante
} else if((Camila >=7) && (Camila <=9)){ //nos dice que mientras la nota sea mayor o igual a 7 y menor o igual a 9 la nota sera notable
    console.log('En base a la nota de Camila su resultado es : Notable'); //Se imprime en caso de que sea la nota del estudiante
} else if((Camila >9) && (Camila <=10)){ //Nos dice que mientras la nota sea mayor a 9 y menor o igual a 10 la nota sera sobresaliento
    console.log('En base a la nota de Camila su resultado es : Sobresaliente'); //Se imprime en caso de que sea la nota del estudiante
}


/*Nota Ricardo*/

if((Ricardo >=0) && (Ricardo <=3)){ //Volvemos a hacer el ejercicio anterior pero esta vez en base a la forma en que se saca las nota de los estudiantes
    //Ahi nos dice que mientras la nota sea igual o mayor  0 y menor o igual a 3 la nota sera muy deficiente.
    console.log("En base a la nota de Ricardo su resultado es : Muy deficiente"); //Se imprime en caso de que sea la nota del estudiante
} else if((Ricardo >3) &&(Ricardo <5)){ //nos dice que mientras la nota sea mayor a 3 y menor a 5 la nota sera Insuficiente
    console.log('En base a la nota de Ricardo su resultado es : Insuficiente'); //Se imprime en caso de que sea la nota del estudiante
} else if((Ricardo >=5) && (Ricardo <=6)){ //nos dice que mientras la nota sea igual o mayor  a 5 y menor o igual a 6 la nota sera suficiente
    console.log('En base a la nota de Ricardo su resultado es : Suficiente.'); //Se imprime en caso de que sea la nota del estudiante
} else if((Ricardo >6) && (Ricardo <7)){ //nos dice que mientras la nota sea mayor a 5 y menor a 5 la nota sera suficiente bien
    console.log('En base a la nota de Ricardo su resultado es : Bien'); //Se imprime en caso de que sea la nota del estudiante
} else if((Ricardo >=7) && (Ricardo <=9)){ //nos dice que mientras la nota sea mayor o igual a 7 y menor o igual a 9 la nota sera notable
    console.log('En base a la nota de Ricardo su resultado es : Notable'); //Se imprime en caso de que sea la nota del estudiante
} else if((Ricardo >9) && (Ricardo <=10)){ //Nos dice que mientras la nota sea mayor a 9 y menor o igual a 10 la nota sera sobresaliento
    console.log('En base a la nota de Ricardo su resultado es : Sobresaliente'); //Se imprime en caso de que sea la nota del estudiante
}


/*Nota Luisa*/

if((Luisa >=0) && (Luisa <=3)){ //Volvemos a hacer el ejercicio anterior pero esta vez en base a la forma en que se saca las nota de los estudiantes
    //Ahi nos dice que mientras la nota sea igual o mayor  0 y menor o igual a 3 la nota sera muy deficiente.
    console.log("En base a la nota de Luisa su resultado es : Muy deficiente"); //Se imprime en caso de que sea la nota del estudiante
} else if((Luisa >3) &&(Luisa <5)){ //nos dice que mientras la nota sea mayor a 3 y menor a 5 la nota sera Insuficiente
    console.log('En base a la nota de Luisa su resultado es : Insuficiente'); //Se imprime en caso de que sea la nota del estudiante
} else if((Luisa >=5) && (Luisa <=6)){ //nos dice que mientras la nota sea igual o mayor  a 5 y menor o igual a 6 la nota sera suficiente
    console.log('En base a la nota de Luisa su resultado es : Suficiente.'); //Se imprime en caso de que sea la nota del estudiante
} else if((Luisa >6) && (Luisa <7)){ //nos dice que mientras la nota sea mayor a 5 y menor a 5 la nota sera suficiente bien
    console.log('En base a la nota de Luisa su resultado es : Bien'); //Se imprime en caso de que sea la nota del estudiante
} else if((Luisa >=7) && (Luisa <=9)){ //nos dice que mientras la nota sea mayor o igual a 7 y menor o igual a 9 la nota sera notable
    console.log('En base a la nota de Luisa su resultado es : Notable'); //Se imprime en caso de que sea la nota del estudiante
} else if((Luisa >9) && (Luisa <=10)){ //Nos dice que mientras la nota sea mayor a 9 y menor o igual a 10 la nota sera sobresaliento
    console.log('En base a la nota de Luisa su resultado es : Sobresaliente'); //Se imprime en caso de que sea la nota del estudiante
}


/*Nota Andres*/

if((Andres >=0) && (Andres <=3)){ //Volvemos a hacer el ejercicio anterior pero esta vez en base a la forma en que se saca las nota de los estudiantes
    //Ahi nos dice que mientras la nota sea igual o mayor  0 y menor o igual a 3 la nota sera muy deficiente.
    console.log("En base a la nota de Andres su resultado es : Muy deficiente"); //Se imprime en caso de que sea la nota del estudiante
} else if((Andres >3) &&(Andres <5)){ //nos dice que mientras la nota sea mayor a 3 y menor a 5 la nota sera Insuficiente
    console.log('En base a la nota de Andres su resultado es : Insuficiente'); //Se imprime en caso de que sea la nota del estudiante
} else if((Andres >=5) && (Andres <=6)){ //nos dice que mientras la nota sea igual o mayor  a 5 y menor o igual a 6 la nota sera suficiente
    console.log('En base a la nota de Andres su resultado es : Suficiente.'); //Se imprime en caso de que sea la nota del estudiante
} else if((Andres >6) && (Andres <7)){ //nos dice que mientras la nota sea mayor a 5 y menor a 5 la nota sera suficiente bien
    console.log('En base a la nota de Andres su resultado es : Bien'); //Se imprime en caso de que sea la nota del estudiante
} else if((Andres >=7) && (Andres <=9)){ //nos dice que mientras la nota sea mayor o igual a 7 y menor o igual a 9 la nota sera notable
    console.log('En base a la nota de Andres su resultado es : Notable'); //Se imprime en caso de que sea la nota del estudiante
} else if((Andres >9) && (Andres <=10)){ //Nos dice que mientras la nota sea mayor a 9 y menor o igual a 10 la nota sera sobresaliento
    console.log('En base a la nota de Andres su resultado es : Sobresaliente'); //Se imprime en caso de que sea la nota del estudiante
}

//Estructuras_de_control


//sentencias switch
//Es un tipo de instrucción que permite ejecutar diferentes bloques de codigo segun el valor del resultado
// se define la variable dia en ella se pide ingresar numero del dia
var dia = parseInt(prompt ('Ingresa el numero del dia de la semana')); //Declaramos la variable dia donde pedimos que sea int

switch(dia){ //Creamos el switch para que asi empezar con los casos
    case 1: //En cada case definimos el valor que le vamos a dar a este, y al escojer el numero u valor declarado en la consola imprimira el mensaje
        console.log('Lunes'); //Si el usuario ingresa el numero 1, la consola va a imprimir el mensaje adentro de el console.
        break; //Rompemos el ciclo
     case 2: //En cada case definimos el valor que le vamos a dar a este, y al escojer el numero u valor declarado en la consola imprimira el mensaje
        console.log('Martes'); //Si el usuario ingresa el numero 2, la consola va a imprimir el mensaje adentro de el console.
         break; //Rompemos el ciclo
    case 3: //En cada case definimos el valor que le vamos a dar a este, y al escojer el numero u valor declarado en la consola imprimira el mensaje
        console.log('Miercoles'); //Si el usuario ingresa el numero 3, la consola va a imprimir el mensaje adentro de el console.
        break; //Rompemos el ciclo
    case 4: //En cada case definimos el valor que le vamos a dar a este, y al escojer el numero u valor declarado en la consola imprimira el mensaje
        console.log('Jueves'); //Si el usuario ingresa el numero 4, la consola va a imprimir el mensaje adentro de el console.
        break; //Rompemos el ciclo
    case 5: //En cada case definimos el valor que le vamos a dar a este, y al escojer el numero u valor declarado en la consola imprimira el mensaje
        console.log('Viernes'); //Si el usuario ingresa el numero 5, la consola va a imprimir el mensaje adentro de el console.
        break; //Rompemos el ciclo
    case 6: //En cada case definimos el valor que le vamos a dar a este, y al escojer el numero u valor declarado en la consola imprimira el mensaje
        console.log('Sabado'); //Si el usuario ingresa el numero 6, la consola va a imprimir el mensaje adentro de el console.
        break; //Rompemos el ciclo
    case 7: //En cada case definimos el valor que le vamos a dar a este, y al escojer el numero u valor declarado en la consola imprimira el mensaje
        console.log('Domingo'); //Si el usuario ingresa el numero 7, la consola va a imprimir el mensaje adentro de el console.
        break; //Rompemos el ciclo 

        default:
            console.log('Dia no encontrado. '); // en este apartado al oprimir o digitar un numero incorrecto dira que el dia no se ha encontrado

}


// Ejercicio numero 2

/* Por medio de un switch, vamos solicitar al usuario que ingrese un numero del 1 al 12, entonces el
programa debera escribir por la consola el mes al que corresponde respectivamente, entonces lo que sabe es que enero = 1,
febrero = 2... y asi sucesivamente, y en caso que el usario ingrese cualquier otro numero que no este dentro del rango aceptao el programa va a indicar "Mes no encontrado " */


// Definimos la variable mes, para que el usuario indique el mes que decia saber segun el numero, y que sea de tipo entero.
var mes = parseInt(prompt ('Ingrese el numero de algun mes : '));

switch(mes){ //Creamos el switch para que asi empezar con los casos
    case 1: // Si el usuario escoje el numero 1 la consola imprimira este bloque
        console.log('Enero'); // Lo que imprimira la consola en caso de que el numero sea 1
        break; //Rompemos el ciclo
    case 2: // Si el usuario escoje el numero 2 la consola imprimira este bloque
        console.log('Febrero'); // Lo que imprimira la consola en caso de que el numero sea 2
         break; //Rompemos el ciclo
    case 3: // Si el usuario escoje el numero 3 la consola imprimira este bloque
        console.log('Marzo'); // Lo que imprimira la consola en caso de que el numero sea 3
        break; //Rompemos el ciclo
    case 4: // Si el usuario escoje el numero 4 la consola imprimira este bloque
        console.log('Abril'); // Lo que imprimira la consola en caso de que el numero sea 4
        break; //Rompemos el ciclo
    case 5: // Si el usuario escoje el numero 5 la consola imprimira este bloque
        console.log('Mayo'); // Lo que imprimira la consola en caso de que el numero sea 5
        break; //Rompemos el ciclo
    case 6: // Si el usuario escoje el numero 6 la consola imprimira este bloque
        console.log('Junio'); // Lo que imprimira la consola en caso de que el numero sea 6
        break; //Rompemos el ciclo
    case 7: // Si el usuario escoje el numero 7 la consola imprimira este bloque
        console.log('Julio'); // Lo que imprimira la consola en caso de que el numero sea 7
        break; //Rompemos el ciclo
    case 8: // Si el usuario escoje el numero 8 la consola imprimira este bloque
        console.log('Agosto'); // Lo que imprimira la consola en caso de que el numero sea 8
        break; //Rompemos el ciclo
    case 9: // Si el usuario escoje el numero 9 la consola imprimira este bloque
        console.log('Septiembre'); // Lo que imprimira la consola en caso de que el numero sea 9
        break; //Rompemos el ciclo
    case 10: // Si el usuario escoje el numero 10 la consola imprimira este bloque
        console.log('Octubre'); // Lo que imprimira la consola en caso de que el numero sea 10
        break; //Rompemos el ciclo
    case 11: // Si el usuario escoje el numero 11 la consola imprimira este bloque
        console.log('Noviembre'); // Lo que imprimira la consola en caso de que el numero sea 11
        break;//Rompemos el ciclo
    case 12: // Si el usuario escoje el numero 12 la consola imprimira este bloque
        console.log('Diciembre'); // Lo que imprimira la consola en caso de que el numero sea 12
        break; //Rompemos el ciclo
 
    
        default: //En cso de que algun valor no sea alguno de los bloques imprimira en la consola el mensaje de error
            console.log('El numero que ha ingresado no coincide con ningun mes.'); //Mensaje de error


}

// EJERCICIO NUMERO 3
/*En este ejercicio nos dice que tenemos un fruver que cuenta con los siguientes productos, vamos a 
hacer un programa usando el swicht que le pida ingresar al usuario
cual es la fruta que desea consultar y el programa devuelva por 
consola el valor correspondiente */

// en este apartado se define la variable fruta y se le solicitara al usuario ingresar una fruta de las siguientes
var fruta = prompt ('Ingrese la fruta que desea a consultar: '); //Le pedimos al usuario que ingrese la fruta 

switch(fruta){ //Creamos el switch para que asi empezar con los casos
    case 'Naranjas': // es este caso en el case se define el valor naranjas 
        console.log('El kilogramo de naranjas cuesta $0,59.');// al digitar o consultar la fruta dira el kilogramo correspondiente en este caso es $0.59
        break; //Rompemos el ciclo
     case 'Manzanas': // es este caso en el case se define el valor manzanas 
        console.log('El kilogramo de manzanas cuesta $0,32.'); // al digitar o consultar la fruta dira el kilogramo correspondiente en este caso es $0.32
         break; //Rompemos el ciclo
    case 'Platanos': // es este caso en el case se define el valor platanos 
        console.log('El kilogramo de platanos cuesta $0,48.'); // al digitar o consultar la fruta dira el kilogramo correspondiente en este caso es $0.48
        break; //Rompemos el ciclo
    case 'Cerezas': // es este caso en el case se define el valor cerezas 
        console.log('El kilogramo de cerezas cuesta $3,00.'); // al digitar o consultar la fruta dira el kilogramo correspondiente en este caso es $3.00
        break; //Rompemos el ciclo
    case 'Mangos': // es este caso en el case se define el valor mangos 
    case 'Papayas':    // es este caso en el case se define el valor papayas  
        console.log('El kilogramo de mangos y papayas cuesta $2,79.'); // al digitar o consultar la fruta dira el kilogramo correspondiente en este caso es $2.79
        break; //Rompemos el ciclo
   
        default:
            console.log('Lo lamentamos, por el momento no disponemos de ' + fruta + '.'); // en este apartado al usuario al consultar alguna fruta que no este la consola imprime que no se dispone de aquella en este momento

}

console.log("hay algo mas que te gustaria consultar?"); // para seguir al finalizar al accion anterior en la consola imprime que si al usuario le gustaria cosultar algo mas

// EJERICIO NUMERO 4
/*el mes de mayo tiene 31 dias,vamos a hacer un programa que le solicite
el usuario de un numero del 1 al 31. dependiendo del dia que digite el
programa devolver el dia de la semana al que corresponde

Es decir si el usuario digite 5 debe decir que ese dia es viernes y asi
para los demas dias del mes de mayo 2023 */

// aca vamos a definir la variable diamayo y se le pidira al usuario que ingrese un numero del dia mayo  2023
var diaMayo = parseInt(prompt ('Ingresa el numero del dia mayo 2023'));

switch(diaMayo){ //Creamos el switch para que asi empezar con los casos
    case 3 : case 10: case 17: case 24: case 31: // Definimos los valores que son correspondientes a los dias lunes del mes mayo del 2025 
        console.log( diaMayo + 'de mayo es Lunes'); //Segun el numero escojido  va a concatenar le variable diaMayo + el mensaje
        break; //Rompemos el ciclo

    case 4 : case 11: case 18: case 25: // en este caso en los case se define los valores que son correspondientes a los dias martes del mes mayo del 2025 
        console.log( diaMayo + 'de mayo es Martes'); //Segun el numero escojido  va a concatenar le variable diaMayo + el mensaje
        break; //Rompemos el ciclo

    case 5 : case 12: case 19: case 26: // en este caso en los case se define los valores que son correspondientes a los dias miercoles del mes mayo del 2025 
        console.log( diaMayo + 'de mayo es Miercoles'); //Segun el numero escojido  va a concatenar le variable diaMayo + el mensaje
        break; //Rompemos el ciclo

    case 6 : case 13: case 20: case 27: // en este caso en los case se define los valores que son correspondientes a los dias jueves del mes mayo del 2025 
        console.log( diaMayo + 'de mayo es Jueves'); //Segun el numero escojido  va a concatenar le variable diaMayo + el mensaje
        break;  //Rompemos el ciclo
        
    case 7 : case 14: case 21: case 28: // en este caso en los case se define los valores que son correspondientes a los dias viernes del mes mayo del 2025 
        console.log( diaMayo + 'de mayo es Viernes'); //Segun el numero escojido  va a concatenar le variable diaMayo + el mensaje
        break;  //Rompemos el ciclo
         
    case 1 : case 8: case 15: case 22: case 29:  // en este caso en los case se define los valores que son correspondientes a los dias sabado del mes mayo del 2025 
        console.log( diaMayo + 'de mayo es Sabado'); //Segun el numero escojido  va a concatenar le variable diaMayo + el mensaje
        break;  //Rompemos el ciclo

    case 2 : case 9: case 16: case 23: case 30: // en este caso en los case se define los valores que son correspondientes a los dias domingo del mes mayo del 2025
        console.log( diaMayo + 'de mayo es Domingo'); //Segun el numero escojido  va a concatenar le variable diaMayo + el mensaje
        break;  //Rompemos el ciclo

 
    
        default: //En caso de que un valor no sea valido la consola enviara un error
            console.log('El numero ingresado no es valido. '); // en este apartado al no ingresar un valor correspondiente dira que el valor no es valido

}

//Ejercicios de practica

// Ejercicio  1

/* Nos pide que escribamos un programa que pida 3 numeros y esciba en la pantalla en mayor de los 3 (if, else, &&)*/

// Solicitar tres números al usuario
console.log('Ejercicio 1 switch');
let num1 = parseFloat(prompt("Ingrese el primer número:")); //Indicamos al usuario que ponga el primer numero
let num2 = parseFloat(prompt("Ingrese el segundo número:")); //Indicamos al usuario que ponga el segundo numero
let num3 = parseFloat(prompt("Ingrese el tercer número:")); //Indicamos al usuario que ponga el tercer numero

// Determinamos el mayor de los tres números
let mayor;

//Aca comparamos los numeros
if ((num1 >= num2) && (num1 >= num3)) { // Si el num1 es mayor o igual que el num2 y num3, entonces num1 sera mayor
    mayor = num1; //Determinamos el mayor de los 3 numeros
} else if ((num2 >= num1) && (num2 >= num3)) { //Aca decimos que si num2 es mayor o igual que num1 y num3, entoces num2 es el mayor
    mayor = num2; //Determinamos el mayor de los 3 numeros
} else { // si ninguno cumple la la condicion se cumple entonces el numero mayor es el num3
    mayor = num3; //Determinamos el mayor de los 3 numeros
}

// Mostrar el resultado
alert("El mayor de los tres números es: " + mayor); //Concatenamos  el texto y la variable

//EJERCICIO 2
//Escriba un programa que solicite el total de una cuenta tenga la 
// opcion de agregar una propia del 15% agregar el iva del 10% el iva debe ser calculado sin El valor de la propina finalmente muestra cuanto es la cuenta total del cliente (if,else,operadores matematicia
// Solicitar el total de la cuenta al usuario
console.log('Ejercicio 2 switch');
let totalCuenta = parseFloat(prompt("Ingrese el total de la cuenta:")); //Aca le estamos asignando un nombre a los resultados de los calculos

// verificar si el valor ingresado es un número válido
if (isNaN(totalCuenta) || totalCuenta < 0) { //usamos isNaN para determinar si un valor es NotaNumber
    alert("Por favor, ingrese un valor numérico válido para la cuenta."); //Alerta en caso de que ingrese algo incorrecto
} else { //La negacion de la condicion
    // solicitar al usuario si desea agregar una propina
    let agregarPropina = prompt("¿Desea agregar una propina del 15%? (sí/no)").toLowerCase(); //En caso de que sea SI o NO, usamos toLowerCase(); para que devuelva el rsultado en minisculas

    //  variable de propina
    let propina = 0; //Aca le estamos asignando un nombre a los resultados del calculo

    // calcular la propina si el usuario lo desea
    if (agregarPropina === "sí" || agregarPropina === "si") { //Usamos OR para comparar el resultado de la variable, en caso de que ambas condiciones se cumplan va a incluiir la propina
        propina = totalCuenta * 0.15; // Calcular el 15% de la cuenta
    }

    // calcular el IVA del 10% sobre el total de la cuenta (sin incluir la propina)
    let iva = totalCuenta * 0.10; //En este caso donde la condicion no se cumpla hara esto 

    // calcular el total final sumando la cuenta, el IVA y la propina
    let totalFinal = totalCuenta + iva + propina;

    // mostrar el resultado al usuario
    alert("El total de la cuenta es: $" + totalCuenta.toFixed(2) + //Usamos el toFixed para redondear un número a un número específico de decimales y este devuelve el resultado como cadena.
          "\nIVA (10%): $" + iva.toFixed(2) + 
          "\nPropina (15%): $" + propina.toFixed(2) + 
          "\nTotal a pagar: $" + totalFinal.toFixed(2));
}


/*Ejercicio 3

en una tienda de coches se requiere redirigir a un cliente a una seccion de acuerdo al tipo de coches que eliga  si elige tipo gasolina  o 1 se le enviara a la oficina numero 200 y si elige electrico o 3 le enviara a la oficina 300 (switch)*/
console.log('Ejercicio 3 switch'); //Separamos el ejercicio para tener un mejor orden
var eleccion = parseInt(prompt('Escoja el tipo de coche | gasolina / 1 | electrico / 3')); //Decimos que sea entero y tambien indicamos las opciones que puede elegir

switch(eleccion){ //Creamos el switch para que la respuesta pueda ser imprimida dependiendo de la opcion que escoja
    case 'gasolina' : case 1 : //Definimos las respuestas
        console.log('Usted sera enviado a la oficina N° 200'); //En caso de que escoja las respuestas definida se ejecutara en la consola
        break; //Rompemos el ciclo
    case 'electrico' : case 3 : //Definimos las respuestas
        console.log('Usted sera enviado a la oficina N° 300'); //En caso de que escoja las respuestas definida se ejecutara en la consola
        break; //Rompemos el ciclo
        default: 
        console.log('Lo que usted ha escojido no cumple con las opciones, intentelo de nuevo');
}


/* 2 - For
Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.
Consta de 3 expresiones dentro de el 

++++++
+*/

//for ([expresion-inicial]; [condicion]; [expresion-final])sentencia Dentro del parentesis agregamos las 3 expresiones que conforma el ciclo for = 
/* Comienzo = indicamos la posicion donde inicia la variable, 
final/condicion = hasta donde va a ir el ciclo, es decir nos va a determinar el final del ciclo, es decir cuantas veces el ciclo dara vuelta
incremento/actualizacion = Nos va a determinar el incremento, es decir de cuanto en cuanto van sumando las posiciones y la variables */
for( i = 0 /Comienzo/; i <= 10/* Final /; i ++/ Incremento o actualización */){}

/*Primer ejemplo
Queremos hacer un listado sencillo de números coinsecutivos de forma ascendente del 1 al 12, y luego d forma descendente del 12 al 1
Vamos a programar un ciclo de 12 vueltas, la diferencia es como los vamos a transformar y mostrar el como nos muestra el numero*/

//Opcion ascendente

console.log('Numeros del 12 al 1 en forma ascendente');
for(var i=1; i <= 12; i+=1){//Primero declararamos la variable para que inicie en 1, luego explicamos cuantas vueltas debe dar el ciclo y por ultiumo un operador unario para ir sumando los numeros de 1 en 1
    console.log(i); //Llamamos a la consola para que imprima la variable i
} //Para sumar hay otra opcion que es en vez de i+=1 seria i++ 

//Opcion descendente

console.log('Numeros del 12 al 1 en forma descendente');
for(var i=12; i >= 1; i--){ //Ahora decimos que inicia en 12 porque el primer numero tiene que ser el 12 y tiene que llegar a uno
    console.log(i); //Llamamos a la consola para que imprima la variable i
}

/*Aplicacion 1

a) Aplicar un for y que el programa muestro los numeros del 6 al 25, pero mostrando de 5 en 5 */
console.log('Aplicacion N°1');
console.log('Numeros de 5 en 5 en forma ascendente | Ejercicio 1/A');
for(var i=5; i <= 25; i+=5){//Primero declararamos la variable para que inicie en 5, luego explicamos cuantas vueltas debe dar el ciclo que en este caso sera hasta llegar a 25 y por ultimo un operador unario para ir sumando los numeros de 5 en 5
    console.log(i); //Llamamos a la consola para que imprima la variable i
} 


/*
B) Usando un for reverso mostrar los numeros de 3 en 3 desde el 24 hasta el 1 de forma descendente.*/

    console.log('Numeros del 24 de 3 en 3 hasta el 1 en forma descendente | Ejercicio 2/A');
for(var i=24; i >= 1; i -= 3){ //Indicamos que vamos a iniciar en 24, el ciclo terminara hasta llegar a 3, y usamos el operador unario pero restando de 3 en 3
    console.log(i); //Llamamos a la consola para que imprima la variable i
}

/*Aplicacion 2
Usando un bucle for escribir un programa que pida un numero entero y muestre en pantalla una lista de numeros desde el 0 al valor ingresado por el usuario */

console.log('Aplicacion N°2');
console.log('Numeros del 0 hasta el valor ingresado por el usuario en forma ascendente');

var valorIngresado, contador; //Definimso la variable contador porque es la que vamos a validar y con eas contamos las veces que el ciclo este dando vuelta
valorIngresado = parseInt(prompt("Ejercicio 1/B | Ingrese un numero entero")); //Pedimos al usuario que digite un numero y que sea entero
for(contador = 0; contador <= valorIngresado; contador++){ //Iniciamos dandole como valor principal 0, luego que el contador ira desde 0 hasta el numero digitado por el usuario
    //Despues indicamos al contador que haga un incremento hasta llegar al numero digitado
    console.log(contador); //Imprimimos la variable
}


/Usando un bucle for escribir un programa que pida un numero entero y muestre una cuenta atras, es decir, una lista de numeros desde el numero teclado hasta el 0/
console.log('Numero ingresado por el usuario hasta 0 en forma descendente'); //Separamos los ejercicios para tener mejor orden  

valorIngresado = parseInt(prompt("Ejercicio 2/B |Ingrese un numero entero")); //Pedimos al usuario que digite un numero y que sea entero
for(contador = valorIngresado; contador >= 0; contador--){ //Indicamos que el contador iniciara en el numero digitado por el usuario y el ciclo terminara cuando el contador llegue a cero, y como valor unario pedimos al contador que sea una resta
    console.log(contador); //Imprimimos la variable
}


/*Windows.alert
Un mensaje en una caja de dialogo

codigos:
window.alert('Hello siempre me llama')
alert('Hellos siempre me llama')

solo es un mensaje
condigo ejm

window.alert('Hello siempre me llama')
alert('Hellos siempre me llama')
*/


/*Ejercicio 3
A) Usando un bucle for escribir un programa que pida un valor entero y muestre en pantalla por medio
de un alert una lista de numeros desde el 0 al valor que ingrese. Los numeros se separan por comas
si el usuario ngresa el numero 5 el alert devolvera la secuencia 0, 1, 2, 3, 4 ,5 
*/

var contador, numUsuario, mensajeComa = '', //Definimos las variables y un espacio en la variable Mensajecoma
numUsuario = parseInt(prompt('Ejercicio 2 - A | Ingrese un número entero : ')); //Pedimos que ingrese un numero entero.
for (contador = 0; contador <= numUsuario; contador ++) { //Decimos que el contador va a inicar en 0, y va a terminar en el valor que haya ingresado el usuario, y en el valor unario sumamos 1
    mensajeComa += contador + ","; //Sumamos los operandos para hacer que los numeros sean separados por comas
}
alert(mensajeComa);

/*
b.) Usando un bucle for escribir un programa que pida un valor entero y muestre en pantalla por medio
de un alert una lista de numeros desde el valor ingresado hasta el 0. Los numeros se separan por comas

si el usuario ngresa el numero 5 el alert devolvera la secuencia 5,4,3,2,1,0,
*/

var contador, numUsuario, mensajeComa = '', //Definimos las variables
numUsuario = parseInt(prompt('Ejercicio 2 - B | Ingrese un número entero')); //Pedimos que ingrese un numero entero, y para que acepte numeros usamos el parseInt
for (contador = numUsuario; contador >= 0; contador --) { //el contador iniciara en el numero que ingreso el usuario, y dice que si el contador terminara en 0, el valor unario en este caso sera la resta
    mensajeComa += contador + ",";  //Sumamos los operandos para hacer que los numeros sean separados por comas
}
alert(mensajeComa);

/* While 
Mientras que: tiene un limite
Crea un blucle que ejecuta una sentencia especificada mientras cierta condición se evalue como verdadera.
Dich condición es evaluada antes de ejecutar la sentencia

Sintanxis

While (Condicion)
    Sentencia

    
While  (i<5 Condicion){}
*/

//While

/*Ejercicio 1

Vamos a realizr una rifa, el numero ganador es el 9, vamos a pedir el usuario que se ingrese un número entero,
mientras que el usuario no ingrese el numero ganador el ciclo debe de repetirse
*/
var numRifa; //Definimos la variable
    numRifa = parseInt(prompt('While 1 | Bienvendo a nuestro sorteo ingrese el número que desee: ')); //Pedimos que ingrese un numero entero, y para que acepte numeros usamos el parseInt
while (numRifa != 9){ //Decimos que Entonces si el numero rifa es igual a 9 saltara una alerta diciendo que el numero sera 9, porque lo usaamos como un filtro
    numRifa = parseInt(prompt('Ingrese otro número')); //Si el numero ingresado no es 9 pedira al usuario que ingrese otro numero
}
alert('Ganaste, el número ganador es 9'); //En caso de que se digite el numero 9 saltara la siguente alerta

/*Ejercicio 2

a) Escriba un programa con while que pregunte un y otra vez si desea continuar con el programa, siempre que se conteste
exactamente si (en minusculas y sin tilde).
*/

var confirmar; //Definimos la variable
confirmar = prompt('While 2 - A | ¿Deseas continuar en el programa? Escriba sí para confirmar'); //Pedimos que ingrese si para confirmar si desea seguir en el programa
while (confirmar == 'sí') { //Entonces, si el resultado de confirmar es igual a si
    confirmar = prompt('Continuas conectado, quieres continuar'); //Va a abrir este cuadro de texto y mostrara el mensaje
}
alert('Gracias, ha finalizado la sesión'); //En caso de que no quiera seguir el usuario

/*Ejercicio 2

b) Escriba un programa con while que pregunte una y otra vez si desea terminar el programa, salvo si se contesta exactamente si
(en mayúsculas y sin tilde)
*/

var confirmar2; //Definimos la variable
confirmar2 = prompt('While 2 - B | ¿Desea SALIR del programa? Escriba SI para SALIR'); //Pedimos que ingrese si para confirmar si desea salir del programa
while (confirmar2 != 'SI') { //Entonces, si la respuesta de confirmar es SI usando el ! revertimos el resultado, que este caso va a mostrar el alert 
    confirmar2 = prompt('Continuas conectado, quieres SALIR'); 
}
alert('Gracias, hasta luego'); //Como revertimos el resultado mostrara este cuadro de texto


/*Do while 
La sentencia (Hacer mientras) crea un bucle que ejecut una sentencia especificada, hasta que la condición de comprobación se evalúa como 
false. La condición se evalúa despues de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos 
una vez

diferencia While
Ejecuta aunque sea una vez el codigo

do {Sentencia} While (Condicion)
*/

//Ejercicio 1

/*Tenemos una letra mágica y es la 'P'
Hagamos un programa usando DO WHILE que solicite el usuario una letra, mientras que la letra no sea P (en mayús) se lo vuelva a pedir
Usar el bucle do...While y la ventana ALERT para los mensajes
*/

var letra = ''; //Definimos la variable
do { 
    letra = prompt('Ingrese una letra');
} while (letra != 'P'); 
alert('Exelente descubriste la letra magica')

/*En este script se le pide usuario que teclee dos numeros, el script mostrará la suma y pedira al usuario si quiere repetir.
Si teclea S repite y si teclea N el programa sale. No acepta otras teclas

Por ejemplo si tecleo 3 despues 9 me dira que la suma es 12, y luego me preguntará si quiero repetir
*/

var numero1, numero2, repite; //Definimos las variables
do{
    numero1 = parseInt(prompt('Primer numero ')); 
    numero2 = parseInt(prompt('Segundo numero '));
    alert("La suma es "+(numero1+numero2));
    do{
        repite = prompt("¿Quiere repetir?");
    } 
    while(repite != 'S' && repite != 'N');
} 
while(repite == 'S');
alert('GRACIAS POR JUGAR');

//EJERCICIO DE PRACTICA

/*1. 
Se quiere un bucle FOR que genere una lista con todos los números pares positivos por debajo del número que ingrese el usuario.
Los números se parecerán en una ventana de ALERT separados por coma
*/

for (var numero = parseInt(prompt("Ingrese el numero:")), pares = "", i = 2; i <= numero; i+= 2) {
    if (i > 2) pares += ", ";
    pares += i;
}
alert("Números pares hasta " + numero + ": " + pares);

/*2.
Escribir un porgrama que pida al usuario una contraseña. Si coincide le devolverá el mensaje "Acceso concedido" y si no coincide
le devolverá el mensaje "Acceso Denegado". Solo permite hacer tres intentos después de esto se emitirá el ALERT ""Usuario Bloqueado"
(While, if, else)
*/

var contraseñaCorrecto = "JeffersonContraseña"; //Variable donde vamos a guardar la contraseña
var intentos; //Variable donde vamos a guardar los intentos

for (intentos = 0; intentos < 3; intentos++) { //
    var contraseñaIngresada = prompt("Ingrese su contraseña;");

    if (contraseñaIngresada === contraseñaCorrecto) {
        alert("Acceso coincididio");
        break;
    } else {
        alert("Acceso denegado")
    }
}

if (intentos == 3) {
    alert("Usuario bloqueado")
}
