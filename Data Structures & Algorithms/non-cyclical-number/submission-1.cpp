class Solution {
public:
    bool isHappy(int n) {
        int slow = n;
        int fast = sumSquareOfDigits(n);
        while(slow != fast) {
            fast = sumSquareOfDigits(fast);
            fast = sumSquareOfDigits(fast);
            slow = sumSquareOfDigits(slow);
        }

        return fast == 1;
    }

    int sumSquareOfDigits(int n) {
        int sum = 0;
        while(n > 0) {
            int digit = n % 10;
            sum += (digit * digit);
            n = floor(n / 10);
        }

        return sum;
    }
};
