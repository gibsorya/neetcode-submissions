class Solution {
public:
    int minimumRecolors(string blocks, int k) {
        int min_ops = INT_MAX;
        int operations = 0;
        int L = 0;
        
        for(int R = 0; R < blocks.length(); R++) {
            if(blocks[R] == 'W') {
                operations++;
                
            }

            if((R - L) + 1 == k) {
                min_ops = std::min(min_ops, operations);

                if(blocks[L] == 'W') {
                    operations--;
                }
                L++;
            }
        }

        return min_ops;
    }
};