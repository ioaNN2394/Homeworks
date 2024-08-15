class Person {
    constructor(Nombre, HoraLlegada) {
        this.Nombre = Nombre;
        this.HoraLlegada = HoraLlegada;
    }
}

class ATMQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(person) {
        this.queue.push(person);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("The queue is empty.");
            return null;
        }
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("The queue is empty.");
            return null;
        }
        return this.queue[0];
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("The queue is empty.");
            return;
        }

        console.log("Queue at the ATM:");
        this.queue.forEach((person, index) => {
            console.log(`${index + 1}. ${person.Nombre} (Arrived at: ${person.HoraLlegada})`);
        });
    }
}



const atmQueue = new ATMQueue();

atmQueue.enqueue(new Person("Alice", "08:00 AM"));
atmQueue.enqueue(new Person("Bob", "08:05 AM"));
atmQueue.enqueue(new Person("Charlie", "08:10 AM"));
atmQueue.enqueue(new Person("Diana", "08:15 AM"));

atmQueue.printQueue();

const servedPerson = atmQueue.dequeue();

atmQueue.printQueue();
