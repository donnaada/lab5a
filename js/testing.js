let t = [1, 2, 3, 4, 5]; //eslint-disable-line
console.log(`length of t ${t.length}`)
let a = 0;
let arry = [];
let i = t.length;
let num = 1;
while (i > 0 && t.length != 1){

  //get list of array before doing anything
  console.log(`t ${t}`);

  // assign value in t[0] to a 
  a = t[0] * t[1];
  console.log(`a ${a}`)
  
  // remove the first value in the array
  t.shift();
  t.shift();

  console.log(t);
  t.unshift(a);
  // check if first value removed
  console.log(`t ${t}`);

  i--;

  // arry.push(a*t[0]);
  // console.log(arry);

  // b = t[1]; //get produce of t[0] & t[1] and store in variable a

  // arry.push(a);
  // console.log(`a ${a}`)
  // console.log(`b ${b}`)
  // t.shift();
  // console.log(`t ${t}`)
  // console.log(`iteration number ${i++}`)
}

// let t = [||1, 2,|| 3, 4, 5];
// get [0] * [1] store as variable a
// pop a into t array 
// let t = [2, 3, 4, 5];


/**
 * 1*2 = 2
 * 2*3 = 6 
 * 6*4 = 24
 * 24*5 = 120
 */