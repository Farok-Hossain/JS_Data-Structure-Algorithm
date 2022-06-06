// First In First Out = FIFO

class Queue{
    constructor(){
        this.queue= [];
    }
    enqueue(element){
        this.queue.push(element);
    }
    dequeue(){
        this.queue.shift();
    }
}

const cars = new Queue();

cars.enqueue('Audi');
cars.enqueue('Land Rover');
cars.enqueue('Bugatti');
cars.enqueue('Lamborgini');

console.log(cars.queue);
cars.dequeue();
console.log(cars.queue);
cars.dequeue();
console.log(cars.queue);
cars.dequeue();
console.log(cars.queue);
cars.dequeue();
console.log(cars.queue);
