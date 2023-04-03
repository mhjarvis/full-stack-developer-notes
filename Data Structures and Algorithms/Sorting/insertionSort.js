/* Efficiency of Insertion Sort

Efficiency:

Four types of steps occur in Insertion Sort: removals, comparisons, shifts, and insertions. 

In a worst case situation, Selection Sort will be faster than Insertion Sort.  However, when looking at just the average case, we would average O(N^2 / 2) which would translate to O(N^2). 

Insertion sort is most efficient when data is 'mostly' sorted. 



Logic of Insertion Sort:

1. Loop through the array starting at index 1.
2. Assign the value at array[i] to a temporary value.
3. Create a position variable and assign it the value of index - 1. The position 
   variable will represent the value we compare against the temporary value.
4. Create a inner while loop which runs while position is greater than or equal
   to 0.
5. Compare position to temporary value.
   a. If position is greater shift that value to the right
   b. Decrement position by 1.
   c. If we encounter a value at position that is greater or equal to the temporary
      value, we can end our pass-through.
6. Move the temp value in the new gap.

*/

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

let arr = [34, 22, 39, 4, 18, 384, 2 ,3, 298, 6, 43, 19, 29, 38]
console.log(insertionSort(arr))