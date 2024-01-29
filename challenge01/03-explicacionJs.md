## Destripar el código:

```

function findFirstRepeated(gifts) {
  // Paso 1: Creo un conjunto (Set) llamado "seenGifts"
  const seenGifts = new Set();

  // Paso 2: Recorro cada regalo en la lista de regalos
  for (const gift of gifts) {
    // Paso 3: Verifico si el regalo ya ha sido visto antes
    if (seenGifts.has(gift)) {
      // Paso 4: Si ya fue visto antes, devuelvo ese regalo
      return gift;
    }

    // Paso 5: Si no fue visto antes, lo agrego al conjunto
    seenGifts.add(gift);
  }

  // Paso 6: Si llego aquí, significa que no hay regalos repetidos
  return -1;
}

```

## Explicación paso a paso:

### Creación del conjunto:
- Se utiliza \`const seenGifts = new Set();\` para crear un conjunto (Set) vacío llamado \`seenGifts\`. \`Set\` es una estructura de datos en JavaScript que almacena valores únicos, eliminando automáticamente duplicados.

  ```javascript
  const set = new Set([1, 2, 3, 3]);
  console.log(set);

  // Respuesta:
  // Set { 1, 2, 3 }
  ```

### Recorrido de cada regalo
- Se utiliza un bucle `for...of` para iterar sobre cada elemento (`gift`) en la lista de regalos (`gifts`).

###  Verificación si el regalo ya fue visto:
- `if (seenGifts.has(gift)):` Se emplea el método `has` para verificar si el conjunto `seenGifts` ya contiene el regalo actual.

### Devolución del regalo si ya fue visto:
- Si el regalo ya fue visto (la condición es verdadera), se devuelve ese regalo utilizando `return gift;`. Esto detiene la ejecución de la función.

### Añadir el regalo al conjunto si no fue visto antes:
- `seenGifts.add(gift)`: Si el regalo no fue visto antes, se agrega al conjunto `seenGifts`. Esto es clave para llevar un registro de los regalos únicos vistos hasta el momento.

### Devolución de -1 si no hay regalos repetidos:
- Después de recorrer todos los regalos, si no se encontró ningún regalo repetido, se llega a `return -1;`. Es importante resaltar que este valor es indicativo de que no hay regalos repetidos en la lista.


