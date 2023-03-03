function printTriangle(size, character) {
    let string = ""
    for (let i = 1; i <= size; i++) {

        string += `${" ".repeat(size - i)}${character.repeat(i)}\n`
        /*
            _ _ _ * (3<> 4-1 --- 1)
            _ _ * * (2<> 4-2 --- 2)
            _ * * * (1<> 4-3 --- 3)
            * * * * (0<> 4-4 --- 4)
        */
    }
    string = string.slice(0, -1)
    return string
}

console.log(printTriangle(5, "*"))
//     *
//    **
//   ***
//  ****
// *****
console.log(printTriangle(4, "$"))
//    $
//   $$
//  $$$
// $$$$
console.log(printTriangle(3, "**"))
//   **
//  ****
// ******

