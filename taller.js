1. Variables básicas.
let nombre
let edad
let ciudad
2. Función con el nombre que desee.
funcyion multiplicar(n1,n2,n3,n4,n5){
let mult =0
  mult = n1 * n2 * n3 * n4 * n5
  console.log(mult);
  return(mult);
}
multiplicar(3,5,6,16,9);
3. Función con parámetros.
  function frase(nombre,edad){
  let frase =`hola, ${nombre}, tines ${edad} eres una gran persona`;
  console.log(frase);
  return(frase);
  }
frase("pool",18)
5. Crear objeto
persona = {
    nombre: "Jean",
    edad: 18,
    profesion: "Desarrollador",
}
console.log(persona.nombre );
console.log(persona.edad);
console.log(persona.profesion);
6. Agregar propiedad
persona = {
    nombre: "Jean",
    edad: 18,
    profesion: "Desarrollador",
}
console.log(persona.nombre );
console.log(persona.edad);
console.log(persona.profesion);
persona.telefono = "123456";
console.log(persona.telefono);
7. Función con objeto (SIN DESESTRUCTURACIÓN)
persona ={
 nombre: "jp",
 profesion: "carpintero"
}
function mostrar(nom,prof){
  console.log("Nombre:" + nom.nombre);
  console.log("Profesion:" + prof.profesion)
}
mostrar(persona,persona)
8. Objeto.
  estudiante ={
    nombre: "pancracio",
    edad: 17,
    notas:{
      matematicas: 4.5,
      ingles: 4.0
    }
  }
  console.log(estudiante.notas.matematicas);
  console.log(estudiante.notas.ingles);
    9. Objeto carro
carro ={
  marca: "ford",
  modelo: "mustang",
  propietario: {
      nombre: "pancracio",
      edad: 35
  }
}
console.log(carro.propietario.nombre,carro.propietario.edad)

10. Función (SIN DESESTRUCTURACIÓN)
function mostrarDesestructurado({ nombre, edad }){
    console.log("Nombre:", nombre)
    console.log("Edad:", edad)
}

let persona = {
    nombre: "Pool",
    edad: 18
}

mostrarDesestructurado(persona)
11. Modificar propiedad
function copiarPersona(obj){
    let copia = { ...obj }
    copia.nombre = "Juan"
    return copia
}

let persona = {
    nombre: "Pool",
    edad: 18
}

let nuevaPersona = copiarPersona(persona)

console.log("Original:", persona.nombre)
console.log("Copia:", nuevaPersona.nombre)
12. Desestructuración
function copiarCarro(obj){
    let copia = {
        ...obj,
        propietario: { ...obj.propietario }
    }

    copia.propietario.nombre = "Pedro"
    return copia
}

let carro = {
    marca: "Ford",
    modelo: "Mustang",
    propietario: {
        nombre: "Pancracio",
        edad: 35
    }
}

let nuevoCarro = copiarCarro(carro)

console.log("Original:", carro.propietario.nombre)
console.log("Copia:", nuevoCarro.propietario.nombre)
13. Desestructuración de objeto carro
let { marca, modelo } = carro
console.log(marca)
console.log(modelo)
14. Desestructuración
let { propietario: { nombre: nomProp, edad: edadProp } } = carro
console.log(nomProp)
console.log(edadProp)
15. Parámetro desestructurado
function mostrar({ nombre, edad }){
    console.log(nombre, edad)
}

mostrar(persona)
16. Desestructuración en función
function mostrarProp({ propietario: { nombre, edad } }){
    return `${nombre} tiene ${edad} años`
}

console.log(mostrarProp(carro))
17. Renombramiento
let persona = {
    nombre: "Pool",
    edad: 18,
    profesion: "Desarrollador"
}

let { nombre: nombrePersona, edad: edadPersona } = persona

console.log(nombrePersona)
console.log(edadPersona)
18. Copia con spread
let persona = {
    nombre: "Pool",
    edad: 18,
    profesion: "Desarrollador"
}

let copiaPersona = { ...persona }

copiaPersona.nombre = "Juan"

console.log("Original:", persona.nombre)
console.log("Copia:", copiaPersona.nombre)
19. Copiar objeto anidado
let carro = {
    marca: "Ford",
    modelo: "Mustang",
    propietario: {
        nombre: "Carlos",
        edad: 35
    }
}

let copiaCarro = {
    ...carro,
    propietario: { ...carro.propietario }
}

copiaCarro.propietario.nombre = "Pedro"

console.log("Original:", carro.propietario.nombre)
console.log("Copia:", copiaCarro.propietario.nombre)
20. Desestructuración completa
function mostrarLibro({
    titulo,
    autor: { nombre, edad },
    editorial: { nombre: nombreEditorial, pais }
}) {
    return `El libro "${titulo}" fue escrito por ${nombre} (${edad} años) y publicado por ${nombreEditorial} en ${pais}.`
}

let libro = {
    titulo: "JavaScript Básico",
    autor: {
        nombre: "Carlos Ruiz",
        edad: 40
    },
    editorial: {
        nombre: "TechBooks",
        pais: "Colombia"
    }
}

console.log(mostrarLibro(libro))
