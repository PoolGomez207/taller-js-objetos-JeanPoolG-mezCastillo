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
carro ={
  marca: "ford", 
  modelo: "mustang"
  propietario: {
    nombre: "juano",
    edad: "36"
  }
}
console.log(carro.marca,carro.propietrio.nombre);

