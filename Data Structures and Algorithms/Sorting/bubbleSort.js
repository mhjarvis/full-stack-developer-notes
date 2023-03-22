
let arr = [34, 22, 39, 4, 18, 384, 2 ,3, 298, 6, 43, 19, 29, 38]
let arr2 = [34, 22, 39, 4, 18, 384, 2 ,3, 298, 6, 43, 19, 29, 38]


function bubbleSort(arr) {

    let start = performance.now();

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    let end = performance.now();
    let time = end - start;
    console.log('Execution time: ' + time);
    
    return arr;
}

function bubbleSortOptimized(arr) {
    let isSwapped = false;

    let start = performance.now();

    for(let i = 0; i < arr.length; i++) {
        isSwapped = false;
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                isSwapped = true
            }
        }
        if(!isSwapped) {
            break;
        }
    }

    let end = performance.now();
    let time = end - start;
    console.log('Execution time: ' + time);

    return arr;
}

console.log('\nBefore Bubble Sort...\n')
console.log(arr)
console.log('\nAfter Bubble Sort...\n')
console.log(bubbleSort(arr))
console.log('\nAfter Optimized Bubble Sort...\n')
console.log(bubbleSortOptimized(arr2))