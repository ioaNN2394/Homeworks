class BookStack {
    constructor() {
        this.stack = {};
        this.count = 0;
    }

    push(name, isbn, author, editorial) {
        this.stack[this.count] = { name, isbn, author, editorial };
        this.count++;
        return this.stack;
    }

    pop() {
        if (this.count === 0) {
            console.log("The stack is empty.");
            return null;
        }
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }

    peek() {
        if (this.count === 0) {
            console.log("The stack is empty.");
            return null;
        }
        return this.stack[this.count - 1];
    }

    size() {
        return this.count;
    }

    print() {
        console.log(this.stack);
    }
}


const bookStack = new BookStack();

bookStack.push("1984", "123456789", "Andres", "Secker & Warburg");
bookStack.push("Juegos del hambre", "987654321", "Jeremaia", "J.B. Lippincott & Co.");
bookStack.push("Guerra mundial Z", "192837465", "Max Brooks", "Charles Scribner's Sons");
bookStack.push("Moby Dick", "564738291", "Herman Melville", "Harper & Brothers");

bookStack.print();

const removedBook = bookStack.pop();
console.log(`\nRemoved book: "${removedBook.name}" by ${removedBook.author}\n`);

bookStack.print();

console.log(`\nTop book: "${bookStack.peek().name}" by ${bookStack.peek().author}"\n`);

console.log(`Stack size: ${bookStack.size()}`);
