// Definition for a Pair
// class Pair {
// public:
//     int key;
//     string value;
//
//     Pair(int key, string value) : key(key), value(value) {}
// };
class Solution {
public:
    vector<Pair> quickSort(vector<Pair>& pairs) {
        sort(pairs, 0, pairs.size() - 1);

        return pairs;
    }

    void sort(vector<Pair>& pairs, int start, int end) {
        if(end - start + 1 <= 1) {
            return;
        }

        Pair pivot = pairs[end];
        int left = start;
        
        for(int i = start; i < end; ++i) {
            if(pairs[i].key < pivot.key) {
                Pair tmp = pairs[left];
                pairs[left] = pairs[i];
                pairs[i] = tmp;
                left++;
            }
        }

        pairs[end] = pairs[left];
        pairs[left] = pivot;

        sort(pairs, start, left - 1);
        sort(pairs, left + 1, end);
    }
};
