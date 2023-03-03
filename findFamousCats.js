/*
    Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada
*/
/*
    Ejemplo:
    Input: findFamousCats([
        {
            name: "Mimi",
            followers: [320, 120, 70]
        },
        {
            name: "Milo",
            followers: [400, 300, 100, 200]
        },
        {
            name: "Gizmo",
            followers: [250, 750]
        }
        ])
    Output: ["Milo", "Gizmo"]
*/


function findFamousCats(cats) {
    // Sumo la cantidad de followers y retorno el nombre y la cantidad
    const catsFollowers = cats.map(cat => {
        let sum = 0
        cat.followers.forEach(cant => sum += cant)
        return { name: cat.name, cantFollowers: sum }
    })

    // Obtengo la mayor cantidad de followers 
    const cantFollowers = catsFollowers.map(cats => cats.cantFollowers)
    let mayorCantFollowers = Math.max(...cantFollowers)

    // Obtengo todos los gatos que tienen la mayor cantidad de followers
    let catMayorFollowers = []
    catsFollowers.forEach(cats => {
        if (cats.cantFollowers == mayorCantFollowers) {
            catMayorFollowers.push(cats.name)
        }
    })
    return catMayorFollowers
}

const cats = [
    {
        name: "Mimi",
        followers: [320, 120, 70]
    },
    {
        name: "Milo",
        followers: [400, 300, 100, 200]
    },
    {
        name: "Gizmo",
        followers: [250, 750]
    }
]

console.log(findFamousCats(cats)) // ["Milo", "Gizmo"]