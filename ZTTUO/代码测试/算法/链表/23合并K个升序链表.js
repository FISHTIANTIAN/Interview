var mergeKLists = function(lists) {
    return lists.reduce((p, n) => {
        while (n) {
            p.push(n), n = n.next
        }
        return p
    },[]).sort((a, b) => a.val - b.val).reduceRight((p, n) => (n.next = p, p = n, p), null)
};


const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
    return accumulator + currentValue;
}

let sum = numbers.reduceRight(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = numbers.reduceRight(
    (accumulator, currentValue) => {
        console.log(accumulator , currentValue)
    }
);
console.log(summation); // 21