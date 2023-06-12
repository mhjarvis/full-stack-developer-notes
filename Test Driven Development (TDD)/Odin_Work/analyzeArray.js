function analyzeArray(arr) {

    let obj = {};
    
    obj.average = getAverage(arr);
    obj.min = Math.min(...arr);
    obj.max = Math.max(...arr);
    obj.length = arr.length;

    return obj;
}

function getAverage(arr) {
    let average = 0;
    for(let i = 0; i < arr.length; i++) {
        average += arr[i];
    }
    return Math.floor(average / (arr.length));
}

module.exports = analyzeArray;

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));