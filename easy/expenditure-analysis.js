/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
/* var transactions = [
  {
    itemName: "Samosa",
    category: "Food",
    price: 10
  },
  {
    itemName: "Ladoo",
    category: "Food",
    price: 20
  },
  {
    itemName: "Pepsi",
    category: "Drink",
    price: 50
  },
  {
    itemName: "Merinda",
    category: "Drink",
    price: 100
  }
] */

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
];

function calculateTotalSpentByCategory(transactions) {
  var spendEstimate = {};
  for (var i=0; i<transactions.length; i++) {
    var transaction = transactions[i];
    if(spendEstimate[transaction.category]) {
        spendEstimate[transaction.category] = spendEstimate[transaction.category] + transaction.price
    } else {
        spendEstimate[transaction.category] = transaction.price
    }
  }
  var answerArray = convertToArray(spendEstimate);
  return answerArray;
}

function convertToArray(input) {
  var keys = Object.keys(input);
  var answer = [];
  for(var i = 0; i<keys.length; i++) {
    var category = keys[i];
    answer.push({
      category: category,
      totalSpent: input[category]
    })
  }

  return answer;
}


var analysis = calculateTotalSpentByCategory(transactions);
console.log("Final Expenditure Analysis");
console.log(analysis);

module.exports = calculateTotalSpentByCategory;