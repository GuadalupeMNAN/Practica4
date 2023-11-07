/*Obtenga la entrada del usuario usando el aviso 
("Ingrese su edad: "). 
Si el usuario tiene 18 años o más, 
muestre el mensaje: 'Tiene la edad suficiente para conducir', 
pero si no tiene 18 años, 
brinde otro mensaje que indique que 
debe esperar la cantidad de años que 
necesita para cumplir 18.*/

let edad = prompt('Ingrese su edad: ')

if (edad >= 18) {
    alert("Tiene la edad suficiente para conducir.");
} 
else {

    let anosFaltantes = 18 - edad
    alert("Te faltan: " + anosFaltantes + " años para conducir.");
}




/*Compara los valores de myAge y yourAge usando if...else. 
Según la comparación, registre el resultado en la consola 
indicando quién es mayor (tú o yo). 
Utilice prompt (“Ingrese su edad: ”) 
para obtener la edad como entrada.*/

let myAge = prompt("Ingrese su edad:")
let yourAge = prompt("Ingrese la edad de otra persona:")

if (myAge > yourAge) {
    console.log("Eres mayor que yo.")
} 
else if (myAge < yourAge) {
    console.log("Yo soy mayor que tú.")
} 
else {
    console.log("Tenemos la misma edad.")
}



/*Si a es mayor que b, devuelve 
'a es mayor que b'; de lo contrario, 
'a es menor que b'. 
Trate de implementarlo de maneras diferentes 
1.Usando if else 
2.Operador ternario.*/

var a = prompt("Ingrese el primer (a) número:");
var b = prompt("Ingrese el segundo (b) número:");

if (a > b) {
    console.log("a es mayor que b");
} else {
    console.log("a es menor o igual que b");
}

var a = prompt("Ingrese el primer (a) número:");
var b = prompt("Ingrese el segundo (b) número:");

var resultado = (a > b) ? "a es mayor que b" : "a es menor o igual que b";
console.log(resultado);


/*Consulta si la temporada es 
Otoño, Invierno, Primavera o Verano. 
Si la entrada del usuario es: 
1. Septiembre, Octubre o Noviembre, la temporada es Otoño.
2. Diciembre, Enero o Febrero, la temporada es Invierno.
3. Marzo, Abril o Mayo, la temporada es Primavera
4. Junio, Julio o Agosto, la temporada es Verano*/

let mes = prompt("Ingrese el nombre del mes:")

switch (mes) {
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("La temporada es Otoño.");
        break;
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("La temporada es Invierno.");
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("La temporada es Primavera.");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("La temporada es Verano.");
        break;
    default:
        console.log("El mes es inválido. Por favor, ingrese otro mes.");
}



/*Escriba un código que pueda calificara 
los estudiantes deacuerdo con sus puntajes:
1. 80-100, A
2. 70-89, B
3. 60-69, C
4. 50-59, D
5. 0-49, F*/

let puntaje = prompt("Ingrese el puntaje del estudiante: ")

if (puntaje >= 80 && puntaje <= 100) {
    console.log("Su calificación es: A");
} else if (puntaje >= 70 && puntaje < 80) {
    console.log("Su calificación es: B");
} else if (puntaje >= 60 && puntaje < 70) {
    console.log("Su calificación es: C");
} else if (puntaje >= 50 && puntaje < 60) {
    console.log("Su calificación es: D");
} else if (puntaje >= 0 && puntaje < 50) {
    console.log("Su calificación es: F");
} else {
    console.log("El puntaje es inválido. Por favor, ingrese un puntaje válido.");
}