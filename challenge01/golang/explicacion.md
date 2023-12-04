## Juego 

1 - Hacemos un Conjunto de Números Vistos:
- Imagina que tienes una lista de números y hay que encontrar el primer número que aparece dos veces en esa lista.

2 - Miramos Cada Número en la Lista:
- Imagina que tenemos otra lista de números en la mano.
- Miramos un número a la vez.

3 - ¿Ya Vimos Este Número?
- Verificamos en nuestra lista (el papel) si ya hemos visto este número antes.
- Si ya lo vimos, eso significa que hemos encontrado el primer número que se repite.

4 - Anotamos el Número en la Lista:
- Si no hemos visto este número antes, lo anotamos en nuestra lista (el papel) para decir que ya lo hemos visto.

5 - Fin del Juego:
- Continuamos mirando los números uno por uno.
- Si terminamos de mirar todos los números y no encontramos ninguno que se repita, decimos "No hay ningún número repetido".

## Ejemplo Práctico
- Tenemos una lista [2, 1, 3, 5, 3, 2].

- Miramos el 2. No lo hemos visto antes, lo anotamos.
- Miramos el 1. No lo hemos visto antes, lo anotamos.
- Miramos el 3. No lo hemos visto antes, lo anotamos.
- Miramos el 5. No lo hemos visto antes, lo anotamos.
- Miramos el 3. ¡Lo visto antes! Entonces, decimos "¡Encontramos el primer número que se repite: 3!".

## SeudoCodigo

```plaintext

Procedimiento EncontrarPrimerRepetido(numeros):
    // Creamos un conjunto de números vistos
    numerosVistos = ConjuntoVacio()

    // Miramos cada número en la lista
    Para cada número en numeros:
        // ¿Ya vimos este número?
        Si numero está en numerosVistos:
            // Hemos encontrado el primer número que se repite
            Devolver numero

        // Anotamos el número en la lista
        Agregar numero a numerosVistos

    // Si llegamos aquí, no encontramos ningún número repetido
    Devolver -1
    
```
