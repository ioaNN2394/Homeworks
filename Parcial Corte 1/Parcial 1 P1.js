class ListaNodo {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Función para combinar dos listas enlazadas ordenadas de mayor a menor
  function mergeSortedListsDescToAsc(lista1, lista2) {
    let resultHead = null;
    let current1 = lista1;
    let current2 = lista2;
  
    // Crear una lista enlazada con la unión de ambas listas
    while (current1 !== null || current2 !== null) {
      let nextValue;
      if (current1 === null) {
        nextValue = current2.value;
        current2 = current2.next;
      } else if (current2 === null) {
        nextValue = current1.value;
        current1 = current1.next;
      } else if (current1.value > current2.value) {
        nextValue = current1.value;
        current1 = current1.next;
      } else {
        nextValue = current2.value;
        current2 = current2.next;
      }
  
      // Insertar al comienzo para ordenar de menor a mayor
      const newNode = new ListaNodo(nextValue);
      newNode.next = resultHead;
      resultHead = newNode;
    }
  
    return resultHead;
  }
  
  // Ejemplo de uso
  const lista1 = new ListaNodo(5);
  lista1.next = new ListaNodo(3);
  lista1.next.next = new ListaNodo(1);
  
  const lista2 = new ListaNodo(4);
  lista2.next = new ListaNodo(2);
  lista2.next.next = new ListaNodo(0);
  
  const mergedList = mergeSortedListsDescToAsc(lista1, lista2);
  
  // Imprimir la lista combinada
  let current = mergedList;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
  