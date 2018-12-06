//Write some JavaScript that finds the average of the following array: //

const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];

// add all the numbers in the array together and divide by the number of numbers//

const avg = function(array){
    let sum = 0;
    for (i = 0; i < array.length; i++){
        sum += array[i];
    }
    let avg = sum/array.length;
    console.log(`${avg} is the average of this set of numbers.`);
}

avg(array);