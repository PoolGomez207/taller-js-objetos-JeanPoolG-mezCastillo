Preguntas teóricas
1. Variables básicas
*¿Qué diferencia hay entre let, var y const?
Let permite cambiar el valor después.
Var es la forma antigua y puede causar problemas por su alcance.
Const no se puede reasignar, aunque si es un objeto sí se pueden cambiar sus propiedades.

*¿Qué tipo de dato es edad?
Es un dato numérico.

*¿Qué es una variable?
Es un espacio donde guardamos información para usarla en el programa.

3. Función con el nombre que desee
*¿Qué es una función?
Es un bloque de código que realiza una tarea específica y se puede reutilizar.

*¿Qué es return?
Es la palabra que usamos para devolver un resultado.

*¿Qué pasa si no tiene return?
La función devuelve undefined.

5. Función con parámetros
*¿Qué son parámetros?
Son las variables que la función recibe, por ejemplo nombre y edad.

*¿Qué son argumentos?
Son los valores reales que enviamos cuando llamamos la función.

*Diferencia entre ambos
El parámetro es la variable en la función, el argumento es el valor que le pasamos

6. Crear objeto
*¿Qué es un objeto en JavaScript?
Es una estructura que guarda información relacionada, como nombre, edad y profesion dentro de persona.

*¿Qué es una propiedad?
Es cada dato dentro del objeto, por ejemplo persona.nombre.

*¿Cómo se accede a una propiedad?
Con punto: persona.nombre

7. Agregar propiedad
*¿Cómo se agrega una nueva propiedad a persona?
Con persona.telefono = valor.

*¿Se puede modificar un objeto declarado con const?
Sí, se pueden cambiar propiedades como telefono, pero no se puede reasignar todo el objeto persona.

8. Función con objeto (SIN DESESTRUCTURACIÓN)
*¿Por qué enviamos el objeto persona completo?
Porque así usamos toda su información sin mandar dato por dato.

*¿Qué ventaja tiene enviar objetos a funciones?
Es más organizado y práctico.

9. Objeto
*¿Cómo se accede a una propiedad dentro de otro objeto?
Usando punto varias veces, por ejemplo: estudiante.notas.matematicas.

10. Función (SIN DESESTRUCTURACIÓN)
*¿Qué ocurre si la propiedad no existe?
Puede devolver undefined o generar error si es algo anidado como propietario.nombre.

*¿Por qué es importante validar datos?
Para evitar que el programa falle si algo no existe.

11. Modificar propiedad
*¿Cómo se modifica una propiedad?
Con carro.propietario.edad = nuevoValor.

*¿Diferencia entre modificar y copiar?
Modificar cambia el carro original.
Copiar crea otro objeto diferente.

12. Desestructuración
*¿Qué es desestructuración?
Es sacar propiedades como nombre y profesion del objeto persona en variables.

*¿Qué ventaja tiene frente al acceso con punto?
Hace el código más limpio y fácil de leer.

13. Desestructuración de objeto carro
*¿Qué pasa si el nombre de la variable no coincide?
La variable queda undefined.

*¿Es obligatorio usar el mismo nombre?
No, se puede cambiar el nombre al desestructurar.

14. Desestructuración
*¿Por qué se usan llaves dentro de llaves?
Porque propietario está dentro del objeto carro.

*¿Qué significa anidamiento?
Que un objeto está dentro de otro.

15. Parámetro desestructurado
*¿Qué significa desestructurar en el parámetro?
Que sacamos directamente nombre y edad cuando la función recibe persona.

*¿Qué ventaja tiene?
No necesitamos usar persona.nombre dentro de la función.

16. Desestructuración en función
*¿Por qué no necesitas usar punto dentro del return?
Porque ya extrajimos nombre y edad del propietario.

*¿Qué ocurre si el objeto no tiene esa propiedad?
Puede generar error.

17. Renombramiento
*¿Qué es el renombramiento?
Es cambiar el nombre de una propiedad al desestructurarla, por ejemplo nombre por nombrePersona.

*¿Cuándo es útil?
Cuando ya existe una variable con ese nombre o queremos algo más específico.

18. Copia con spread
*¿Qué hace el operador spread (...)?
Copia las propiedades de persona en un nuevo objeto.

*¿La copia es profunda o superficial?
Es superficial, solo copia el primer nivel.

19. Copiar objeto anidado
*¿Por qué se debe copiar también propietario?
Porque si no, seguiría siendo el mismo objeto interno.

*¿Qué pasa si no lo haces?
Al cambiar algo en la copia, también cambia en el original.

20. Desestructuración completa
*¿Es recomendable hacer desestructuración muy larga?
No mucho, puede ser difícil de entender.

*¿Cuándo dividirla?
Cuando el objeto es grande o tiene muchos niveles.

*Errores comunes
Escribir mal las propiedades o desestructurar algo que no existe.
