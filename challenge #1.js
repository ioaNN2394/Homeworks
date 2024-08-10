class TodoNode {
    constructor(Titulo, Descripcion) {
        this.Titulo = Titulo;
        this.Descripcion = Descripcion;
        this.next = null; // Apunta al siguiente TODO
    }
}

class TodoList {
    constructor() {
        this.Cabeza = null; // Primer nodo de la lista
        this.Cola = null; // Último nodo de la lista
        this.length = 0; // Contador de la longitud de la lista
    }

    append(Titulo, Descripcion) {
        const newTodo = new TodoNode(Titulo, Descripcion);
        if (this.Cabeza === null) {
            this.Cabeza = newTodo; // Si la lista está vacía, el nuevo TODO es la cabeza
            this.Cola = newTodo; // y también la cola
        } else {
            this.Cola.next = newTodo; // El último nodo apunta al nuevo TODO
            this.Cola = newTodo; // Actualizamos la cola para que sea el nuevo TODO
        }
        this.length++;
    }

    peek(index) {
        if (index < 0 || index >= this.length) {
            return null; // Retorna null si el índice está fuera de los límites
        }
        let current = this.Cabeza;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        return current;
    }

    size() {
        return this.length; // Retorna el tamaño de la lista
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return null; // Retorna null si el índice está fuera de los límites
        }
        let removedTodo = null;
        if (index === 0) {
            removedTodo = this.Cabeza;
            this.Cabeza = this.Cabeza.next;
        } else {
            let previous = this.peek(index - 1);
            removedTodo = previous.next;
            previous.next = removedTodo.next;
            if (index === this.length - 1) {
                this.Cola = previous;
            }
        }
        this.length--;
        return removedTodo;
    }

    print() {
        let current = this.Cabeza;
        while (current !== null) {
            console.log(`Titulo: ${current.Titulo}`);
            console.log(`Descripcion: ${current.Descripcion}`);
            console.log('---');
            current = current.next; // Avanza al siguiente nodo
        }
    }
}

// Crear la lista de TODOs y agregar algunos elementos
const todoList = new TodoList();
todoList.append("Comprar comida", "Leche, Pan, Huevos");
todoList.append("Repasar", "Ejercicios JavaScript");
todoList.append("Entrenamiento", "Correr 30-minutos");

// Imprimir todos los TODOs
todoList.print();


