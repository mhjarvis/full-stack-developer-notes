/* Selection Sort

*/

function selectionSort(array) {
    let newLowest = null;

    for(let i = 0; i < array.length; i++) {
        newLowest = i;
        for(let j = 1; j < array.length; j++) {
            if(array[j] < array[newLowest]) {
                newLowest = j;
            }
        }
        if(newLowest != i) {
            let temp = array[i];
            array[i] = array[newLowest];
            array[newLowest] = array[temp];
        }
    }

    console.log(array)

}

let array = [4, 2, 7, 1, 3]
selectionSort(array);

// move through the array comparing index 1 to each other index
    // if we come accross a lower one, we store that index
    // at the end, we switch the values of these two indexes
// after pass through, we move up one index
// continue until the array is fully sorted