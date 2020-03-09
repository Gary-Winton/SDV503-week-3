let x = 15
let y = 20

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)
console.log(x + ++y)

// increment before add the number straight away when increment after takes an extra step before adding

x = 10
y = x 

console.log ("pre - increment")

y = ++x
console.log(x)
console.log(y)

console.log("post - increment")

y = x++
console.log(x)
console.log(y)

x = 10
y = x 

console.log ("pre - increment")

y = --x
console.log(x)
console.log(y)

console.log("post - increment")

y = x--
console.log(x)
console.log(y)
