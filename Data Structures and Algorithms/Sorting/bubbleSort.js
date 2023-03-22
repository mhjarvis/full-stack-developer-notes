
let arr = [34, 22, 39, 4, 18, 384, 2 ,3, 298, 6, 43, 19, 29, 38]

function bubbleSort(arr) {

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function bubbleSortOptimized(arr) {
    
}

console.log('\nBubble Sort\n')
console.log(arr)
console.log('\nAfter Bubble Sort\n')
console.log(bubbleSort(arr))