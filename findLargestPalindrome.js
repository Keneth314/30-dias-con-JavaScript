/*
En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.
Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima, debes devolver el primer palíndromo encontrado en la lista.
*/

function findLargestPalindrome(words){
    const palindromes = []

    // Función que determina si es palíndromo
    function isPalindrome(str) {
        str = str.toLowerCase() // Pasamos a minúscula
        const invertedStr = str.split("").reverse().join("") // Invertimos la misma palabra
        return (str === invertedStr) ? true : false 
    }

    // Guardamos en un array todos los palindromos
    words.forEach(word => {
        if(isPalindrome(word)){ palindromes.push(word)}
    })

    // Si no hay ningún palíndromo en el array retorna null y si lo hay encuentra el más largo
    if(palindromes.length){
        let largestWordSize = palindromes[0].length; let index = 0
        for (let i = 1; i < palindromes.length; i++) {
            if(palindromes[i].length > largestWordSize){
                largestWordSize = palindromes[i].length; index = i
            }            
        }
        return palindromes[index]
    }
    else{
        return null
    }
}

console.log(findLargestPalindrome(["racecar", "level", "world", "hello"])) // racecar
console.log(findLargestPalindrome(["Platzi", "javascript", "html", "css"])) // null