// 1672. Richest Customer Wealth

/* You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let richest = 0
//use reduce to solve this shit probably
  for(let i = 0; i < accounts.length; i++){
    for(let j = 0; j < i.length; j++){
      console.log(accounts[j]);
    }
  }

  console.log(richest);
};

maximumWealth([[1,2,3],[3,2,1]])