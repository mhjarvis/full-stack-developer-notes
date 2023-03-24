// BUBBLE SORT (NOT OPTIMIZED)
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

// BUBBLE SORT (OPTIMIZED)
function bubbleSortOptimized(arr) {
    let isSwapped = false;
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
    return arr;
}

// SELECTION SORT
function selectionSort(array) {
    for(let i = 0; i < array.length - 1; i++) {
        let newLowest = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[newLowest]) {
                newLowest = j;
            }
        }
        if(newLowest != i) {
            let temp = array[i];
            array[i] = array[newLowest];
            array[newLowest] = temp;
        }
    }
    return array;
}

// INSERTION SORT
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let temp = arr[i]       
        let position = i - 1

        while(position >= 0) {
            if(arr[position] > temp) {
                arr[position + 1] = arr[position]
                position = position - 1
            } else {
                break
            }
        }
        arr[position + 1] = temp
    }
    return arr
}

let arr = [
    7871,   32, 1890, 3489, 7715,  183, 8765, 2867, 5188, 6962,
     186, 7278, 9768, 7617, 9479, 5587, 2983, 1111, 9040, 9028,
    3130,  825, 5478, 8982, 1649, 7504, 7840, 8521, 8833, 6067,
    1761,   52, 5774, 1402, 7981, 9554,  432, 5523, 7667, 6745,
     137, 2770, 5347, 1186, 9004, 9289,  706, 2566,  305, 2515,
    6351, 1490, 3287, 3681, 9337, 2941, 4532, 6672,  399, 8250,
     157, 1045, 4515, 9096, 1555, 2129, 5143,  409,  669, 1833,
    1610,  730, 2068, 3400, 9650, 2889, 3169, 7836,  729, 9917,
    1090,  313,  109, 6680, 4176, 9586, 6641, 3965, 2143, 3216,
    9957, 6947, 8768, 2252, 1071, 1057, 3323, 3877,  312, 3056
  ]
  
let arr2 = [
    7871,   32, 1890, 3489, 7715,  183, 8765, 2867, 5188, 6962,
     186, 7278, 9768, 7617, 9479, 5587, 2983, 1111, 9040, 9028,
    3130,  825, 5478, 8982, 1649, 7504, 7840, 8521, 8833, 6067,
    1761,   52, 5774, 1402, 7981, 9554,  432, 5523, 7667, 6745,
     137, 2770, 5347, 1186, 9004, 9289,  706, 2566,  305, 2515,
    6351, 1490, 3287, 3681, 9337, 2941, 4532, 6672,  399, 8250,
     157, 1045, 4515, 9096, 1555, 2129, 5143,  409,  669, 1833,
    1610,  730, 2068, 3400, 9650, 2889, 3169, 7836,  729, 9917,
    1090,  313,  109, 6680, 4176, 9586, 6641, 3965, 2143, 3216,
    9957, 6947, 8768, 2252, 1071, 1057, 3323, 3877,  312, 3056
  ]
  
let arr3 = [
    7871,   32, 1890, 3489, 7715,  183, 8765, 2867, 5188, 6962,
     186, 7278, 9768, 7617, 9479, 5587, 2983, 1111, 9040, 9028,
    3130,  825, 5478, 8982, 1649, 7504, 7840, 8521, 8833, 6067,
    1761,   52, 5774, 1402, 7981, 9554,  432, 5523, 7667, 6745,
     137, 2770, 5347, 1186, 9004, 9289,  706, 2566,  305, 2515,
    6351, 1490, 3287, 3681, 9337, 2941, 4532, 6672,  399, 8250,
     157, 1045, 4515, 9096, 1555, 2129, 5143,  409,  669, 1833,
    1610,  730, 2068, 3400, 9650, 2889, 3169, 7836,  729, 9917,
    1090,  313,  109, 6680, 4176, 9586, 6641, 3965, 2143, 3216,
    9957, 6947, 8768, 2252, 1071, 1057, 3323, 3877,  312, 3056
  ]

let arr4 = [
    7871,   32, 1890, 3489, 7715,  183, 8765, 2867, 5188, 6962,
     186, 7278, 9768, 7617, 9479, 5587, 2983, 1111, 9040, 9028,
    3130,  825, 5478, 8982, 1649, 7504, 7840, 8521, 8833, 6067,
    1761,   52, 5774, 1402, 7981, 9554,  432, 5523, 7667, 6745,
     137, 2770, 5347, 1186, 9004, 9289,  706, 2566,  305, 2515,
    6351, 1490, 3287, 3681, 9337, 2941, 4532, 6672,  399, 8250,
     157, 1045, 4515, 9096, 1555, 2129, 5143,  409,  669, 1833,
    1610,  730, 2068, 3400, 9650, 2889, 3169, 7836,  729, 9917,
    1090,  313,  109, 6680, 4176, 9586, 6641, 3965, 2143, 3216,
    9957, 6947, 8768, 2252, 1071, 1057, 3323, 3877,  312, 3056
  ]
  


let start1 = performance.now();
bubbleSort(arr);
let end1 = performance.now();
let time1 = end1 - start1;

let start2 = performance.now();
bubbleSortOptimized(arr2);
let end2 = performance.now();
let time2 = end2 - start2;

let start3 = performance.now();
selectionSort(arr3);
let end3 = performance.now();
let time3 = end3 - start3;

let start4 = performance.now();
selectionSort(arr4);
let end4 = performance.now();
let time4 = end4 - start4;



console.log('Execution time for bubbleSort(): ' + time1 * 100 + ' ms');
console.log('Execution time for bubbleSortOptimized(): ' + time2 * 100 + ' ms');
console.log('Execution time for selectionSort():' + time3 * 100 + ' ms');
console.log('Execution time for insertionSort(): ' + time4 * 100 + ' ms');

/* function test(n) {
    let arr = [];
    count = 0;
    to
    while(count < n) {
        let x = Math.floor(Math.random() * 10000);
        arr.push(x);
        count++;
    }
    return arr;
}

console.log(test(100)) */