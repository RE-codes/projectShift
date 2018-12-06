// Imagine that you have two arrays, each with single letter strings in the arrays. For example:

// ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
// ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];
// Write some JavaScript to create a new array based on the overlapping items and the number of times the overlap occurs. For example, our new array would look like this:

// ['a', 'a', 'c', 'b', 'b'];
// To explain further, the string 'a' appears 3 times in the frist array and 2 times in the second array. Therefore, there are only 2 overlaps. The string 'c' appears 1 time in the first array and 2 times in the scrond array. Therefore, there is only 1 overlap. The same pattern follows with 'b'. Our new array is based on those overlaps.

const arrayOne = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
const arrayTwo = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];

const showOverlap = function(array1, array2){
    //let sortedArr1 = array1.sort();
    //let sortedArr2 = array2.sort();

    // Should be two arrays sorted in alpha order.
    // *** I may not need to do this ^^^ ***
    
    //let index = 0; 

    // Find the larger array and use it's length as my index.

    // if (sortedArr1.length < sortedArr2.length){
    //     index2 = sortedArr2.length;
    // } else {
    //     index1 = sortedArr1.length;
    // }

    // *** I may not need this ^^^ either! ***

    // Loop through the array to check if each value has a match in the other and add that to a new array.

    let newArray = [];

    for(let i = 0; i < array1.length; i++){ 
        for(let j = 0; j < array2.length; j++){
            if(array1[0] === array2[j]){
                newArray.push(array1[i]);
                array1.shift(); 
            } else {
            }
        }
    };
    
    console.log(newArray.sort());
};

showOverlap(arrayOne, arrayTwo);