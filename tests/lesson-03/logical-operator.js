let a = true;
let b = false;

if (a || b) {
    console.log("run code");
}

const newA = !a; // Đảo ngược giá trị của a
const newB = !b; // Đảo ngược giá trị của b

console.log(newA); // false
console.log(newB); // true