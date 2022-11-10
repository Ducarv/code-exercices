class Planner {
    constructor() {
        this.plannerArr = [];
    }

    savePerson(name, age, height) {
        const newPerson = {
            name: name,
            age: age,
            height: height
        };
        this.plannerArr.push(newPerson);
    }

    removePerson(name) {
        let count = 0;
        while(count < this.plannerArr.length) {
            if(name === this.plannerArr[count].name) {
                this.plannerArr.slice(count, 1);
                console.log("User removed");
            } 
            if(count === this.plannerArr.length) {
                return console.log("User not found");
            }

            count++;
        }
    }

    findPerson(name) {
        let count = 0;
        while(count < this.plannerArr.length) {
            if(name === this.plannerArr[count].name) {
                return `user: ${this.plannerArr[count].name} index: ${count}`
            } 
            if(count === this.plannerArr.length) {
                return console.log("User not found");
            }

            count++;
        }
    }

    printPlanner() {
        return this.plannerArr;
    }

    printPerson(position) {
        let count = 0;
        while(count < this.plannerArr.length) {
            if(position === count) {
                console.log(this.plannerArr[count]);
            } 
            if(count === this.plannerArr.length) {
                return console.log("User not found");
            }

            count++;
        }
    }
}

const newPlanner = new Planner();
newPlanner.savePerson("Jose", 28, 1.75);
newPlanner.savePerson("Eduardo", 18, 1.80);
newPlanner.savePerson("Mariana", 20, 1.63);
newPlanner.savePerson("Matheus", 22, 1.77);

console.log(newPlanner.printPlanner());


