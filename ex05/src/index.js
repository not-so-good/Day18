//Only change code below this line
let shoppingList = new Map([
  ["Banana", 4],
  ["Pineapple", 4],
  ["Pear", 4],
  ["Carrot", 4],
  ["Apple", 4]
]);

let arrKey = [];
let arrValue = [];

for(let col of shoppingList.entries()){
    arrKey.push(col[0]);
}

for(let i = 0; i < arrKey.length; i++){
    console.log("groceries: " + arrKey[i]);
}

for(let col of shoppingList.entries()){
    arrValue.push(col[1]);
}

for (let i = 0; i < arrValue.length; i++) {
  console.log("amount:  " + arrValue[i]);
}

for (let col of shoppingList.entries()) {
  console.log(col);
}


//Only change code above this line
module.exports = {shoppingList, arrKey, arrValue};

