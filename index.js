// pure function
var pureAdd = function(value){
 return value +1
}
console.log(pureAdd(3))
console.log(pureAdd(3))
console.log(pureAdd(3))

// impure function
var x = 5

var add = function(){
 x += 1
 return x
}

console.log(add())
console.log(add())
console.log(add())