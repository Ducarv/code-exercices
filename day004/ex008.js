const testArr = 
[
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18,
    19, 20
];

const sumArr = arr => {
    const reduceArr = arr.reduce((accValue, nextValue) => accValue + nextValue);
    return reduceArr;
}

console.log(sumArr(testArr));

/**
    <<< EXPLANATION >>>
    1.  First off we declare a function 'sumArr()' with one parameter that represent the array that will be verified;
    2.  The first line of function we have declared a constant 'reduceArr', this const receives the array with the 'reduce' 
        method. Reduce is a callback function that return a new array after execute all steps, in this case we added the
        current element of array with the next;
    3.  Finally the function return a new array;
 */