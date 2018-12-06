// Write some JavaScript to find the MOST frequent item, and the LEAST frequent item in the following array. The return should look like: The most frequent item is: b. The least frequent item is : d 

const array = ['a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'];

// Loop through the array and count each letter, saving the count into a separate variable.

let count_a = 0;
let count_b = 0;
let count_c = 0;
let count_d = 0;
let count_e = 0;

for (let item of array) {
    switch(item){
        case 'a':
            count_a ++;
            break;
        case 'b':
            count_b ++;
            break;
        case 'c':
            count_c ++;
            break;
        case 'd':
            count_d ++;
            break;
        case 'e':
            count_e ++;
            break;
    }
};

let sort_me = [count_a, count_b, count_c, count_d, count_e];

sorted = sort_me.sort(function(a, b){
    return a - b});

console.log(sorted);

//  I actually don't think this is getting me anywhere...

console.log(count_a);
console.log(count_b);
console.log(count_c);
console.log(count_d);
console.log(count_e);