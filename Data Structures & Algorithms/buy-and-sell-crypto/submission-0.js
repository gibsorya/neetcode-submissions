class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let L = 0;



        for(let R = L + 1; R < prices.length; R++) {
            let buyPrice = prices[L]
            let sellPrice = prices[R]
            if(buyPrice >= sellPrice) {
                L = R;
                continue;
            }

            profit = Math.max(profit, sellPrice - buyPrice)
        }

        return profit
    }
}
