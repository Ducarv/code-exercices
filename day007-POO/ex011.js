class Planner {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    plannerArr = [];

    savePerson(name, age, height) {
        const newPerson = {
            name: name,
            age: age,
            height: height
        };
        this.plannerArr.push(newPerson);
    }

    removePerson(name) {
        for(let count = 0; count < this.plannerArr.length; count++) {
            if(name === this.plannerArr[count].name) {
                this.plannerArr.slice(count, 1);
            }
        }
    }
}