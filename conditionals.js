/*Obtenga la entrada del usuario usando el aviso 
("Ingrese su edad: "). 
Si el usuario tiene 18 años o más, 
muestre el mensaje: 'Tiene la edad suficiente para conducir', 
pero si no tiene 18 años, 
brinde otro mensaje que indique que 
debe esperar la cantidad de años que 
necesita para cumplir 18.*/

let edad = prompt("Ingrese su edad: ")

if (edad >= 18) {
    console.log("Tiene la edad suficiente para conducir.")
} else {
    let anosFaltantes = 18 - edad
    console.log("Te faltan " + anosFaltantes + " años para poder conducir.")
}




/*Compara los valores de myAge y yourAge usando if...else. 
Según la comparación, registre el resultado en la consola 
indicando quién es mayor (tú o yo). 
Utilice prompt (“Ingrese su edad: ”) 
para obtener la edad como entrada.*/

let myAge = 22
let yourAge = prompt("Ingrese la edad de otra persona: ")

if (myAge == yourAge ) {
    console.log("Tenemos la misma edad.")                
} 
else if (myAge > yourAge) {
    let anosQueTeFaltan = 22 - yourAge
    console.log("Soy " + anosQueTeFaltan + " años mayor que tu.")
} 
else if (myAge < yourAge)  {
    let anosQueMeFaltan = yourAge - 22
    console.log("Eres " + anosQueMeFaltan + " años mayor que yo.")
}



/*Si a es mayor que b, devuelve 
'a es mayor que b'; de lo contrario, 
'a es menor que b'. 
Trate de implementarlo de maneras diferentes 
1.Usando if else 
2.Operador ternario.*/ 

let a = prompt("Ingrese el primer número:")
let b = prompt("Ingrese el segundo número:")

if (a > b) {
    console.log(a+" es mayor que "+b)
} else if (a < b) {
    console.log(a+" es menor que "+b)
}




/*Consulta si la temporada es 
Otoño, Invierno, Primavera o Verano. 
Si la entrada del usuario es: 
1. Septiembre, Octubre o Noviembre, la temporada es Otoño.
2. Diciembre, Enero o Febrero, la temporada es Invierno.
3. Marzo, Abril o Mayo, la temporada es Primavera
4. Junio, Julio o Agosto, la temporada es Verano*/

let mesUserInput = prompt("Ingrese el mes:")
let mes = mesUserInput.toLowerCase()
 {

  
    switch (mes) {
      case 'septiembre':
      case 'octubre':
      case 'noviembre':  
    console.log("La temporada es otoño.")
   break

      case 'diciembre':
      case 'enero':
      case 'febrero':
        console.log("La temporada es invierno. ")
        break

      case 'marzo':
      case 'abril':
      case 'mayo':
        console.log("La temporada es primavera.")
        break

      case 'junio':
      case 'julio':
      case 'agosto':
        console.log("La temporada es verano.")
        break
      
      
     
  default:
    console.log("Mes no valido")
     
    }
  }



/*Escriba un código que pueda calificara 
los estudiantes deacuerdo con sus puntajes:
1. 80-100, A
2. 70-89, B
3. 60-69, C
4. 50-59, D
5. 0-49, F*/

let puntaje = prompt("Ingrese el puntaje del estudiante:")

if (puntaje >= 80 && puntaje <= 100) {
    console.log("Calificación: A")
} else if (puntaje >= 70 && puntaje < 80) {
    console.log("Calificación: B")
} else if (puntaje >= 60 && puntaje < 70) {
    console.log("Calificación: C")
} else if (puntaje >= 50 && puntaje < 60) {
    console.log("Calificación: D")
} else if (puntaje >= 0 && puntaje < 50) {
    console.log("Calificación: F")
} 