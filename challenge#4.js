class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class City {
    constructor(name) {
        this.name = name;
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }

    getResidents() {
        return this.residents;
    }
}

class Graph {
    constructor() {
        this.people = [];
        this.cities = new Map();  
    }

    addPerson(person) {
        this.people.push(person);
        if (this.cities.has(person.city)) {
            this.cities.get(person.city).addResident(person);
        } else {
            const city = new City(person.city);
            city.addResident(person);
            this.cities.set(person.city, city);
        }
    }

    getPeopleInCity(cityName) {
        if (this.cities.has(cityName)) {
            return this.cities.get(cityName).getResidents();
        } 
    }

    printPeopleInCity(cityName) {
        const residents = this.getPeopleInCity(cityName);
        if (residents.length > 0) {
            console.log(`Personas viviendo en ${cityName}:`);
            residents.forEach(person => {
                console.log(`Nombre: ${person.name}, Edad: ${person.age}`);
            });
        } 
    }
}


const graph = new Graph();

graph.addPerson(new Person("Alice", 25, "New York"));
graph.addPerson(new Person("Bob", 30, "Los Angeles"));
graph.addPerson(new Person("Charlie", 22, "New York"));
graph.addPerson(new Person("Diana", 28, "Chicago"));
graph.addPerson(new Person("Eve", 35, "Los Angeles"));

graph.printPeopleInCity("New York");
graph.printPeopleInCity("Los Angeles");
graph.printPeopleInCity("Chicago");
