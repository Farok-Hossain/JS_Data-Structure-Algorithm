const numbers = [45,41,2,6,8,12,2,33,45,89,7];

function selection_sort(array){
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i; j < array.length; j++) {
            if(array[j] < array[min]){
                min = j;
            }
            
        }
        [array[i], array[min]] = [array[min], array[i]];
        
    }
    return array;
}

const sorted = selection_sort(numbers);
console.log(sorted);