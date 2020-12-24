function countDown(n) {
    for(let i = n; i > 0; i--) {        
        console.log(i);
    }
    console.log('Hurray');
}

function countDownRecursive(n) {
    debugger
    if (n <= 0) {
        console.log('Hurray')
        return
    }
    console.log(n);
    countDownRecursive(n-1)
 }
 

 function sumRangeRecursive(n, total = 0) {
    debugger
     if (n <= 0) {
         return total
     }

     return sumRangeRecursive(n - 1, total + n)
 }
let count = 0;
// const cache = {};

function fib(n) {
    count++;
    if (n < 3) {  
        return 1;
    }    
    return fib(n-1) + fib(n-2); 
}

function fibWithCache(n, cache = {}) {
    debugger
    count++;    
    if (cache[n]) {
        return cache[n]
    } else {

        if (n < 3) {
            cache[n] = 1;
            return 1;
        }
        const result = fibWithCache(n-1, cache) + fibWithCache(n-2, cache);
        cache[n] = result;
        return result;
    }
}

// debugger

console.log(`number: ${fibWithCache(6)} | executions: ${count}`);
// console.log(`number: ${fib(20)} | executions: ${count}`);

/*

function countDownRecursive(n) {
   if (n <= 0) {
       console.log('Hurray)
       return;
   }
   console.log(n);
   countDownRecursive(n-1)
}






class Node { 
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree { 
    constructor(rootNode = null) { 
        this.root = rootNode;
    }

    // addNode

    // removeNode

    // traversePreOrder
    
    // traverseOrder
    
    // traversePosOrder

    // search (n, order)
 
    // list (order)

    // balance
}
*/
// const node1 = new Node(1);

// const Tree1 = new Tree(node1)



/*
const node_example = { 
    value: null, // Number
    left: null, // Node
    right: null // Node
}


const tree_example = {
    root: null // Node
}
function Node(value, left, right) { 
    this.value = value;
    this.left = left;
    this.right = right;
}

Node.prototype.example = function () { 
    console.log('oi')
}



const node2 = new Node(2);
const node3 = new Node(3, node1, node2);


console.log(node3.left)

debugger
*/