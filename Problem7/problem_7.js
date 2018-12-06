// Imagine that you're wanting to withdraw cash from the bank to cover specific costs. You want to withdraw the exact dollar amount, using the largest bills possible. For example, if the cost you were trying to cover is $1,745, you would need to withdraw 17 $100 bills, 2 $20 bills and 1 $5 bill. We'll leave change (anything less than a dollar) out of it for the sake of the exercise.

// To solve this, write a function that takes one argument, cost and returns an object with the bill breakdown. For example, the object returned for $1,744, would like look this:

// {
//   100: 17,
//   20: 2,
//   1: 4
// }
// If you want to take it a step further, enable your function to take a second argument, bills, which is an array of the bills you want your budget broken down in to. For example:

// budgetToBills(1754, [20, 10, 5, 1]); // { 20: 87, 10: 1, 1: 4 }
// budgetToBills(1754, [100, 20, 50, 10, 5, 1]; // { 100: 17, 50: 1, 4: 1 }
// What if you someone passes in the wrong arguments?

const dollaBillsYall = function(cost){
    let hundreds = 0;
    let twenties = 0;
    let tens = 0;
    let fives = 0;
    let ones = 0;
    let remainder = 0;
    let results = {};

    if (cost >= 100){
        hundreds = parseInt(cost/100);
        remainder = cost - hundreds * 100;
        console.log(`${hundreds} hundreds`);
        results = {100: hundreds};
        if (remainder > 0){
            dollaBillsYall(remainder);
        }
    } else if (cost >= 20 && cost < 100){
        twenties = parseInt(cost/20);
        remainder = cost - twenties * 20;
        console.log(`${twenties} twenties`);
        results = {20: twenties};
        if (remainder > 0){
            dollaBillsYall(remainder);
        }
    } else if (cost >= 10 && cost < 20){
        tens = parseInt(cost/10);
        remainder = cost - tens * 10;
        console.log(`${tens} tens`);
        results = {10: tens};
        if (remainder > 0){
            dollaBillsYall(remainder);
        }
    } else if (cost >= 5 && cost < 10){
        fives = parseInt(cost/5);
        remainder = cost - fives * 5;
        console.log(`${fives} fives`);
        results = {5: fives};
        if (remainder > 0){
            dollaBillsYall(remainder);
        }
    } else {
        ones = cost;
        console.log(`${ones} ones`);
        results = {1: ones};
    }
    
    // if (remainder > 0){
    //     dollaBillsYall(remainder);
    // } grrrrr


//  So far this will take the initial cost and correctly determine how many of the largest bill is needed and the remainder. This is probably where the recursion thing we talked about would come in handy.

//  So calling the function on a non-zero remainder seemed to help.

    //  Now to turn these results into an object...
    
//  Treating the object like an array didn't work...

   console.log(results);  
   
//  This prints four separate objects. I need to combine them somehow.
//  *** WHY ARE THEY IN THE REVERSE ORDER? *** 

//  Moved the function into a nested if statement for the various denominations to give them a condition of a non-zero remainder. Seemed to help. I now have just the denominations I need in individual objects. I'm sure there's a way to combine objects. Seems like a good time to google something...

};

dollaBillsYall(1744);