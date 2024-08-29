class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Función para combinar dos listas enlazadas ordenadas de mayor a menor
  function mergeSortedListsDescToAsc(list1, list2) {
    let resultHead = null;
    let current1 = list1;
    let current2 = list2;
  
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
      const newNode = new ListNode(nextValue);
      newNode.next = resultHead;
      resultHead = newNode;
    }
  
    return resultHead;
  }
  
  // Ejemplo de uso
  const list1 = new ListNode(5);
  list1.next = new ListNode(3);
  list1.next.next = new ListNode(1);
  
  const list2 = new ListNode(4);
  list2.next = new ListNode(2);
  list2.next.next = new ListNode(0);
  
  const mergedList = mergeSortedListsDescToAsc(list1, list2);
  
  // Imprimir la lista combinada
  let current = mergedList;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
  