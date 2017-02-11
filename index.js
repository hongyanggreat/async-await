let mang = [4, 3, 7, 5, 1];

// mang.forEach(e => console.log(e));
var nhan2 = e => e * 2;
var mang2 = mang.map(nhan2);

// console.log(mang2);

// function add(a, b){
//   return a + b;
// }

let add = (a, b) => a + b;

// console.log(add(4, 5));

let getFunction = (num) => {
  if(num >= 0) return () => console.log('So duong');
  return () => console.log('So am')
}

// getFunction(1)();

let a = () => {}

console.log(a());
