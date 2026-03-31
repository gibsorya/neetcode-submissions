class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = prices[0];
        int maxPrice = 0;

        for(int price : prices) {
            if(price < minPrice) {
                minPrice = price;
            } else if((price - minPrice) > maxPrice) {
                maxPrice = price - minPrice;
            }
        }

        return maxPrice;
    }
};
