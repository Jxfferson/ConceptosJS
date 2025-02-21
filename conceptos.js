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