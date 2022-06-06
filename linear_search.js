const numbers = [10, 12, 5, 45, 53, 25, 466, 3, 21, 63, 4, 78, 122, 9, 46];

// console.log(numbers.length);
// console.log(numbers.indexOf(63));

function linear_search(array, target){
    for (let i = 0; i <= array.length; i++) {
        const element = array[i];
        if( element === target) {
            return i;
        }
        
    }
    return -1;
}

const index = linear_search(numbers, 21);
console.log(index);