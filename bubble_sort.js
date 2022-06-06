const numbers = [12,58,99,352,112,23,6,89,21,97,19,48,84,46,17,3];

function bubble_sort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1; j++) {
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}

const sorted = bubble_sort(numbers);
console.log(sorted);





// normal sorting

const n = [4,65,21,365,45,78,69,548,213,46,84,269,50,13,2,56,40,8,9,123,456,489,23,48,14];
n.sort(function(a,b){
    return a-b;
});
console.log(n);