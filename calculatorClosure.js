/*
    En este desafío tendrás que crear una calculadora mediante el uso de closures.

    La calculadora debe contar con los siguientes métodos:

    add: recibe un número, lo suma al total y devuelve el resultado
    subtract: recibe un número, lo resta al total y devuelve el resultado
    multiply: recibe un número, lo multiplica al total y devuelve el resultado
    divide: recibe un número, lo divide al total y devuelve el resultado
    clear: reinicia el total a 0 y devuelve el resultado
    getTotal: devuelve el total actual.
*/

/* 
    Input:
    const calculator = createCalculator()
    calculator.add(10)

    Output: 10
*/


function createCalculator(){
    // Variable que recordará el valor en cada retorno
    let num = 0

    return {
        // Creamos una arrow function para cada operación
        add : val => num += val,
        subtract : val => num -= val,
        multiply : val => num *= val,
        divide : val => num /= val,
        clear : () => num = 0,
        getTotal : () => num,
    }
}

const myCalculator = createCalculator()
console.log(myCalculator.add(20)) // 20
console.log(myCalculator.subtract(8)) // 12
console.log(myCalculator.multiply(5)) // 60
console.log(myCalculator.divide(10)) // 6
console.log(myCalculator.getTotal()) // 6
console.log(myCalculator.clear()) // 0