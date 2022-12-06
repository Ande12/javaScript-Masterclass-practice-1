// a function that sums elements in an array using only looping constructs
function sumArr(array){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = (arr[i] + sum);
    }
    return  console.log(array,' => ',sum);
}
var arr = [2,7,3,6,4];
sumArr(arr);