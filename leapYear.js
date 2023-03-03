// Determinar si un año es bisiesto o no

// Algoritmo sacado de Wikipedia: https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto
function isLeapYear(year){
    // Agrego el year > 0 para asegurar que sea positivo el año
    const isDivisible4 = (year % 4 == 0 && year > 0)
    const isDivisible100 = (year % 100 == 0 && year > 0)
    const isDivisible400 = (year % 400 == 0 && year > 0)
  
    return isDivisible4 && (!isDivisible100 || isDivisible400)
}

console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(-2024)); // false
console.log(isLeapYear(1984.25)); // false

