function twoSumWithMap(arr, target) {
    if(arr.length < 2) return [];
    let numMap = new Map();
    for(let i=0; i < arr.length; i++) {
        let num = arr[i];
        let complement = target - num;
        if(numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(num, i);
    }
    return [];
}

function twoSumWithObject(arr, target) {
    if(arr.length < 2) return [];
    let numObj = {};
    for(let i=0; i < arr.length; i++) {
        let num = arr[i];
        let complement = target - num;
        if(numObj.hasOwnProperty(complement)) {
            return [numObj[complement], i];
        }
        numObj[num] = i;
    }
    return [];
}




// Unique Numbers
console.log("Input: [3, 4, 9, 14], Target: 12");
console.log("Output: ", twoSumWithMap([3, 4, 9, 14], 12));

// Duplicate Numbers
console.log("Input: [5, 7, 4, 7], Target: 14");
console.log("Output: ", twoSumWithObject([5, 7, 4, 7], 14));

// No sum Numbers
console.log("Input: [7, 1, 13, 1], Target: 10");
console.log("Output: ", twoSumWithObject([7, 1, 13, 1], 10));

// Negative Numbers
console.log("Input: [-5, -4, -3, -1, -2], Target: -10");
console.log("Output: ", twoSumWithMap([-1, -2, -3, -4, -5], -10));

// One number Array
console.log("Input: [3], Target: 4");
console.log("Output: ", twoSumWithMap([3], 4));

// Empty Array
console.log("Input: [], Target: 0");
console.log("Output: ", twoSumWithObject([], 0));
