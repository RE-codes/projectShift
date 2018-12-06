// Write some JavaScript to find the MOST frequent item, and the LEAST frequent item in the following array. The return should look like: The most frequent item is: b. The least frequent item is : d 

const array = ['a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'];

// So I'll try organizing the list by grouping like terms.

let a = [];
let b = [];
let c = [];
let d = [];
let e = [];

for (let i = 0; i < array.length; i++){
    if (array[i] === 'a'){
        a.push(array[i]);
    } else if (array[i] === 'b'){
        b.push(array[i]);
    } else if (array[i] === 'c'){
        c.push(array[i]);
    } else if (array[i] === 'd'){
        d.push(array[i]);
    } else {
        e.push(array[i]);
    }
};

// Create a new array containing arrays of the grouped terms

const newArray = [a, b, c, d, e];

console.log(newArray);  //just checking :)

// Loop through the new array to find the number of items in the sub-arrays. If it's larger than the current max, replace max with the new number, otherwise log the 0th (or any) index of the sub-array at that point.

const findMax = function(){
    let max = 0;
    let most = "";
    for (let i = 0; i < newArray.length; i++){
        if (newArray[i].length > max) {
            max = newArray[i].length;
            most = newArray[i][0];
        } else if (newArray[i].length <= max){
            max = max;
            most = most;
        }
    };
    console.log(`The most frequent item is: ${most}.`);
};

// That seemed to work. So let's do the same for the other case.

const findMin = function(){
    let min = Infinity;
    let least = "";
    for (let i = 0; i < newArray.length; i++){
        if (newArray[i].length < min){
            min = newArray[i].length;
            least = newArray[i][0];
        } else if (newArray[i].length >= min){
            min = min;
            least = least;
        }   
    }
    console.log(`The least frequent item is: ${least}.`);
};

findMax();
findMin();