/** 121. Best Time to Buy and Sell Stock */

var maxProfit = function(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let price of prices) {
      let currProfit = price - minPrice;
      maxProfit = Math.max(maxProfit, currProfit);
      minPrice = Math.min(minPrice, price);
  }
  return maxProfit;
};