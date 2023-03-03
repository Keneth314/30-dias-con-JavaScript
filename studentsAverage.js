/*
En este desafío, deberás calcular el promedio general de una clase, así como el promedio individual de cada estudiante.

Para ello, se te proporcionará un array de objetos, cada uno de los cuales representará a un estudiante y tendrá las siguientes propiedades:

name: El nombre del estudiante
grades: Las notas de cada materia del estudiante
A partir de esta información, debes retornar un nuevo objeto que tenga la propiedad classAverage con el promedio de la clase y un array de students con los estudiantes y sus promedios individuales.

Es importante mencionar que los promedios deben ser calculados con precisión y se deben redondear a dos decimales para que los test pasen sin problema alguno. Puedes usar el método toFixed().
*/

/*
Input: getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
])

Output: {
  classAverage: 88.17,
  students: [
    {
      name: "Pedro",
      average: 88.75
    },
    {
      name: "Jose",
      average: 88.5
    },
    {
      name: "Maria",
      average: 87.25
    }
  ]
}
*/

const students = [
    {
        name: "Pedro",
        grades: [90, 87, 88, 90],
    },
    {
        name: "Jose",
        grades: [99, 71, 88, 96],
    },
    {
        name: "Maria",
        grades: [92, 81, 80, 96],
    },
]


function getStudentsAverage(students){
    // Creo el array de objetos que contiene el nombre y promedio de cada alumno
    const studentsAverage = students.map(student => {
        let sum = 0
        student.grades.forEach(grade => sum += grade)
        return {name: student.name, average: parseFloat((sum / student.grades.length).toFixed(2))}
    })

    // Calculo el promedio del aula 
    let sumAverage = 0
    studentsAverage.forEach(student => {sumAverage += student.average}) 
    const classAverage = parseFloat((sumAverage / studentsAverage.length).toFixed(2))
    
    // Retorno el promedio de la clase y el array de estudiantes y sus promedios respectivos
    return {classAverage, students: studentsAverage}
}

console.log(getStudentsAverage(students))
/*
{
  classAverage: 88.17,
  students: [
    { name: 'Pedro', average: 88.75 },
    { name: 'Jose', average: 88.5 },
    { name: 'Maria', average: 87.25 }
  ]
}
*/




