class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    play(status) {
        console.log(`${this.name} is playing ${status}`);
    }
}

const person1 = new Person('Sakib', 34);
const person2 = new Person('Riyad', 36);
console.log(person1.name);


person1.play('well');
person2.play('bad');