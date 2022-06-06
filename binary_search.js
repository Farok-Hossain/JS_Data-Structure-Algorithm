let numbers = [140000, 104, 99,10, 12, 5, 45, 53, 25, 466, 3, 21, 63, 4, 78, 122, 9, 46];
numbers.sort(function(a, b){
    return a -b;
});
// console.log(numbers);

function binary_search(array, target){
    let start = 0;
    let end = numbers.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end) /2);
        if(array[mid] === target){
            return mid;
        }
        if(target < array[mid]){
            end = mid -1;
        }
        if(target > array[mid]){
            start = mid + 1;
        }
    }
    return -1;
}

const index = binary_search(numbers, 45);
console.log(index);



// const n = [11,25,1,14,589,99,789,158,63,89,86,83,98,27,58,94];
// n.sort(function(a,b){
//     return b-a;   // a-b ...sort the ascending order 
//                  //  b-a ...sort the desending order
// });
// console.log(n);