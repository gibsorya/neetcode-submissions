class Solution {
private:
public:
    int climbStairs(int n) {
        return dfs(n, 0);
    }

    int dfs(int n, int currPos) {
        if(currPos >= n) {
            return currPos == n;
        }

        return dfs(n, currPos + 1) + dfs(n, currPos + 2);
    }
};
