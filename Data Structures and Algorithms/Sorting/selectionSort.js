/* Selection Sort

*/

export function selectionSort(array) {

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

let array = [4, 2, 7, 1, 3]

console.log(selectionSort(array))

