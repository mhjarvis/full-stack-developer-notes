/*  Efficiency of Bubble Sort

Bubble sort contains both comparisons and swaps. 

The number of comparisons that happen will reduce by 1 after each pass through (the final number is always in the correct spot). For a array with 5 elements, we would thus have:

    4 + 3 + 2 + 1 = 10 comparisons

In a more formal way, we could say that for an array of all sizes we have:

    (N - 1) + (N - 2) + (N - 3)... + 1 comparisons

The number of swaps that happen will vary, but in a worst case scenario (the array is descending), we would perform a swap during each comparison. In this case, as the number of elements in the array increases, the number of swaps will also most likely increase:

N Data Elements         Max # of Steps
        5                     20
        10                    90
        20                    380
        40                    1560
        80                    6320

Based on the increase in steps, you can see that the growth is about equal to N^2.

*/
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