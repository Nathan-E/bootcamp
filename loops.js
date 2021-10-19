/**
 * Allow to use iteration
 */

/**
 * for
 * while
 * do while
 * 
 * for each
 * for of
 * for in
 */
//intializer = > starting point for your iteration
//condition = > allows the loop block to run if it evaluates to true
//increment = > used to manipulate the intializer

// i++ === i += 1


for (let i = 10 ; i < 5; i += 3) {

    console.log(i);
    
}

// let j = 0;

// while (j < 11) {
//     console.log(j);
//     j++;
// }

// let k = 10;

// do {
//     console.log(k);
//     k += 3
// } while (k < 50);

// function add(x, y) {
//     return x + y;
// }

/**
 * Write a function that return only a list of even numbers when given odd numbers
 * @param {*} arr e.g [1, 3, 7, 10, 5, 4, 2, 4]
 */
function filter(arr) {
    /**
     * returning a list
     * loop through the array
     *  pick the number and check if it is even or not
     *  if it is even, i will put it into the result list
     *  if it is odd, i will ignore it
     * 
     * return the result list
     */

    const result = [];

    for (let i = 0; i < arr.length; i++) {       
        const number = arr[i];
        if (number % 2 !== 0) {
            result.push(number);
        }
    }
    
    return result;
}

console.log(filter([1, 3, 7, 10, 5, 4, 2, 4]));
