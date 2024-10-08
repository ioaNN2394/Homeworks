class Person {
    constructor(NombreCompleto, AñoNacimiento) {
        this.NombreCompleto = NombreCompleto;
        this.AñoNacimiento = AñoNacimiento;
        this.Hijo = [];
    }

    addChild(child) {
        this.Hijo.push(child);
    }
}

class ArbolFamiliar {
    constructor(root) {
        this.root = root;
    }

    preOrderTraversal(node) {
        if (node == null) return;

        console.log(`${node.NombreCompleto} (${node.AñoNacimiento})`);
        for (let child of node.Hijo) {
            this.preOrderTraversal(child);
        }
    }

    postOrderTraversal(node) {
        if (node == null) return;

        for (let child of node.Hijo) {
            this.postOrderTraversal(child);
        }
        console.log(`${node.NombreCompleto} (${node.AñoNacimiento})`);
    }

    inOrderTraversal(node) {
        if (node == null || node.Hijo.length === 0) {
            if (node != null) console.log(`${node.NombreCompleto} (${node.AñoNacimiento})`);
            return;
        }

        const mid = Math.floor(node.Hijo.length / 2);

        for (let i = 0; i < mid; i++) {
            this.inOrderTraversal(node.Hijo[i]);
        }

        console.log(`${node.NombreCompleto} (${node.AñoNacimiento})`);

        for (let i = mid; i < node.Hijo.length; i++) {
            this.inOrderTraversal(node.Hijo[i]);
        }
    }

    // Nueva función para calcular la altura del árbol
    calcularAltura(node) {
        if (node == null) {
            return -1; // Si el nodo es null, la altura es -1 (árbol vacío)
        }

        let alturaMaxima = 0;
        for (let child of node.Hijo) {
            const alturaHijo = this.calcularAltura(child);
            alturaMaxima = Math.max(alturaMaxima, alturaHijo);
        }

        return alturaMaxima + 1; // Sumar 1 para contar el nivel actual
    }

    printTraversals() {
        console.log('Pre-order Traversal:');
        this.preOrderTraversal(this.root);

        console.log('\nIn-order Traversal:');
        this.inOrderTraversal(this.root);

        console.log('\nPost-order Traversal:');
        this.postOrderTraversal(this.root);

        console.log(`\nAltura del árbol: ${this.calcularAltura(this.root)}`);
    }
}

// Creación del árbol familiar
const grandParent = new Person("Juan Jose", "1950-01-01");

const parent1 = new Person("Doroti Ismael", "1975-05-05");
const parent2 = new Person("Jack Ryan", "1978-09-10");

const child1 = new Person("Kevin Rincon", "2000-12-12");

grandParent.addChild(parent1);
grandParent.addChild(parent2);
parent1.addChild(child1);

const miArbolFamiliar = new ArbolFamiliar(grandParent);

// Imprimir los recorridos y la altura del árbol
miArbolFamiliar.printTraversals();
