/* Efficiency of Selection Sort

Selection Sort, like buble sort, has both comparisons and swaps.

N elements      Max # of steps in Bubble Sort       Max # of Steps in Selection Sort
    5                       20                          14 (10 compare + 4 swaps)
    10                      90                          54 (45 compare + 9 swaps)
    20                      380                         199 (180 + 19)
    40                      1560                        819 (780 + 39)
    80                      6320                        3239 (3160 + 79)

Overall, Selection Sort remains as N^2 since we ignore constants when writing Big O notation. Despite that, we can still see that Selection Sort is about twice as fast as Bubble Sort.

*/

function selectionSort(array) {

    for(let i = 0; i < array.length - 1; i++) {
        let newLowest = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[newLowest]) {
                newLowest = j;
            }
        }
        if(newLowest != i) {
            [array[i], array[newLowest]] = [array[newLowest], array[i]]; 
/*             let temp = array[i];
            array[i] = array[newLowest];
            array[newLowest] = temp; */
        }
    }
    return array;
}

let array = [4, 2, 7, 1, 3]

console.log(selectionSort(array))

