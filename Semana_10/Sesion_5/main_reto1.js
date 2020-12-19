/*1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, 
apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33” */

const introduceP = (name,lastname,age) => `Hola mi nombre es ${name} ${lastname} y mi edad es ${age}`

console.log('Ejercicio 1 : ',introduceP('Karina','Quispe',27))

/*2.Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855 
Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855 */

function sumOfCubes(a,b,c){
    return a**3+b**3+c**3
}

console.log('Ejercicio 2 : ',sumOfCubes(1,5,9))

/*3. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js */

let tipoJS = ["hola",1,null,false,,[1,2,3,4],mascotas={tipo:"Gato",nombre:"Shiro",edad:3}]

function findType(arr){
    for (let index = 0; index < arr.length; index++) {
        console.log('Ejercicio 3 : ',typeof arr[index])        
    }
}

findType(tipoJS)

/*4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest) */

function sumar(...numeros){
    let sum = 0

    for (let index = 0; index < numeros.length; index++) {
        sum = sum + numeros[index]
    }

    return sum    
}

console.log('Ejercicio 4 : ',sumar(1,2,3,4,5,6))

/*5. Crear una función que reciba un array de valores y filtre los valores que no son string */

let pruebaStrg = [0,6,4,1,"H",5,3,"O",1,"L","A"]


function findString(arrPS){
    let newArr = []
    
    for (let index = 0; index < arrPS.length; index++) {
        if(typeof(arrPS[index]) === typeof(String())) {
            newArr.push(arrPS[index])
        }
    }

    return newArr
}

console.log('Ejercicio 5 : ',findString(pruebaStrg))


/*6.Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5] */

let arrMM = [1, 2, 3, 4, 5]

function minmax(arre){
    let max = Math.max.apply(Math,arre);
    let min = Math.min.apply(Math,arre);

    return `El mayor es : ${max} y el menor es : ${min}`
}

console.log('Ejercicio 6 : ',minmax(arrMM))

/*7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890" */

let phoneArr = [1,2,3,4,5,6,7,8,9,0]

function formatPhoneNumber(arrP){
let phoneP = "(xxx) xxx-xxxx";  

    for (var i=0; i<arrP.length; i++){
        phoneP = phoneP.replace('x', arrP[i]);
    }
    
    return phoneP;
}

console.log('Ejercicio 7 : ', formatPhoneNumber(phoneArr))

/*8. Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2] */

let matriz = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]

function findLargestNums(arrMatriz){
    arrMatriz.forEach(function maxC(singleArr){
        let eachMax = Math.max.apply(Math,singleArr);
        console.log('Ejercicio 8 : ',eachMax)
    })
}

findLargestNums(matriz)

/*9. Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8. */

function charIndex (word,letter){
    position_ini = word.indexOf(letter)
    position_end = word.lastIndexOf(letter)

    return `La primera ${letter} tiene la posicion ${position_ini} , el ultimo ${letter} tiene la posicion ${position_end} `
}

console.log('Ejercicio 9 : ',charIndex("Monologo","o"))
  

/*10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]] */

function toArray(objTransform){
    let newMatriz = Object.entries(objTransform)
    return newMatriz
}

console.log('Ejercicio 10 : ',toArray({b:2,z:6}))


/*11. Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
*/
let listPeople = [{ name: "John", age: 21, budget: 23000 },{ name: "Steve",  age: 32, budget: 40000 },{ name: "Martin",  age: 16, budget: 2700 }]

function getBudgets(arrPeople){
    let sumBudgets=0;
    arrPeople.forEach(function sumaB(singleBudget){
        let singleBdg = singleBudget.budget
        sumBudgets += singleBdg
    })

    return sumBudgets
}

console.log('Ejercicio 11 : ',getBudgets(listPeople))

/*12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]
*/

let listStudents = [{ name: "Steve" },{ name: "Mike" },{ name: "John" }]

function getStudentNames(arrStudents){
    let arrNames=[];
    arrStudents.forEach(function sumaB(singleName){
        let singleN = singleName.name
        arrNames.push(singleN)
    })

    return arrNames
}

console.log('Ejercicio 12 : ',getStudentNames(listStudents))

/*13. Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
 */

 let k_values = {likes: 2,dislikes: 3,followers: 10}

 function objectToArray(objArray){
    let newRange = Object.entries(objArray)
    return newRange
}

console.log('Ejercicio 13 : ', objectToArray(k_values))


/*14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
 */


function squaresSum(n){
    let sumResult=0
    for(let i=1;i<=n;i++){
        sumResult += i**2
    }

    return sumResult
}

console.log('Ejercicio 14 : ',squaresSum(3))

/*15. Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
*/

let arrNumbers = [2,3,1,0]

function multiplyByLength(arrN){
    let newArrN=[];
    arrN.forEach(singleNum => newArrN.push(singleNum*arrN.length))

    return newArrN
}

console.log('Ejercicio 15 : ',multiplyByLength(arrNumbers))

/*16. Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
countdown(5) ➞ [5, 4, 3, 2, 1, 0]
 */

 function countdown(sortn){
     let newDescA =[]
     for(let i=sortn;i>=0;i--){
         newDescA.push(i)
     }
     return newDescA
 }

 console.log('Ejercicio 16 : ',countdown(5))

 /*17. Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
*/

let matrizN = [10, 4, 1, 4, -10, -50, 32, 21]

function calcMin(arrC){
    let min = Math.min.apply(Math,arrC);
    return min
}

function calcMax(arrC){
    let max = Math.max.apply(Math,arrC);
    return max
}

function diffMaxMin(arrMiMx){
    let Dmin = calcMin(arrMiMx)
    let Dmax = calcMax(arrMiMx)

    return Dmax - Dmin
}

console.log('Ejercicio 17 : ',diffMaxMin(matrizN))
console.log(`El menor es ${calcMin(matrizN)}, el mayor es ${calcMax(matrizN)}`)

/*18. Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
*/

let pruebaNumber = [1, 2, 3, "x", "y", 10]


function filterList(arrPN){
    let newArrN = []
    
    for (let index = 0; index < arrPN.length; index++) {
        if(typeof(arrPN[index]) === typeof(Number())) {
            newArrN.push(arrPN[index])
        }
    }

    return newArrN
}

console.log('Ejercicio 18 : ',filterList(pruebaNumber))

/*19. Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento 
que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13]
*/

function repeat(element,n_times){
    let newArrNT = []
    let i=0

    do{
     newArrNT.push(element)
     i++
    }while(i<n_times)

    return newArrNT
}

console.log('Ejercicio 19 : ',repeat(13,5))

/*20. Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus"
*/

function vreplace(text,letter_end){
    let newText = text.replace(/[aeiou]/g,letter_end)
    return newText
}

console.log('Ejercicio 20 : ',vreplace("apples and bananas","u"))

/*21. Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" 
y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
*/

function findNemo (phrase,word){
    position = phrase.indexOf(word)

    return `Encontre a ${word} en ${position} `
}

console.log('Ejercicio 21 : ',findNemo("I am finding Nemo !","Nemo"))

/*22. Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO" 
*/

function capLast(text){
    return text.toLowerCase().split(" ").map(function(item) {
        return item.slice(0, -1) + item.slice(-1).toUpperCase();
    }).join(" ");
}

console.log('Ejercicio 22 : ',capLast("hello"))