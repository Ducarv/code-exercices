class Salary {
    constructor() {
        this.people = [];
    }

    addPeople(name, age, genre, salary) {
        const personObj = {
            name: name,
            age: age,
            genre: genre,
            salary: salary,
        }

        return this.people.push(personObj);
    }

    salaryAvarage() {
        let count = 0;
        let amount = 0;
        let avarage = 0;

        while(count < this.people.length) {
            amount += this.people[count].salary;
            count++;
        }
        avarage = Number((amount / this.people.length).toFixed(2));

        return avarage;
    }

    higherAge() {
        let higherAge = 0;

        for(let count = 0; count < this.people.length; count++) {
            if(this.people[count].age > higherAge) {
                higherAge = this.people[count].age;
            }
        }
        return higherAge;
    }

    lowerAge() {
        let lowerAge = 0;

        for(let count = 0; count < this.people.length; count++) {
            if(this.people[count].age < lowerAge || lowerAge === 0) {
                lowerAge = this.people[count].age;
            }
        }
        console.log(lowerAge);
    }

    womanSalaryUnder(limit) {
        let womanSum = 0;
        for(let count = 0; count < this.people.length; count++) {
            if(this.people[count].genre === "F" && this.people[count].salary <= limit) {
                womanSum++;
            }
        }
        return `The number of woman with the salary under ${limit} is ${womanSum}`
    }

    printPeople() {
        return console.log(this.people);
    }
}

const newWorker = new Salary();
