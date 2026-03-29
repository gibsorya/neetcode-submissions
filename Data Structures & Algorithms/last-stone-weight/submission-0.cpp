class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        int result = 0;
        priority_queue<int> maxHeap;
        
        for(int stone : stones) {
            maxHeap.push(stone);
        }

        while(maxHeap.size() > 1) {
            int x = maxHeap.top();
            maxHeap.pop();
            int y = maxHeap.top();
            maxHeap.pop();

            if(x < y) {
                y = y - x;
                maxHeap.push(y);
            } else if (x > y) {
                x = x - y;
                maxHeap.push(x);
            }
        }

        if(maxHeap.size() == 1) {
            return maxHeap.top();
        }

        return result;
    }
};
