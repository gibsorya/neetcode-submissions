class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        map<vector<int>, vector<string>> anagrams;
        vector<vector<string>> result;

        for(auto str : strs) {
            vector<int> anagram(26);
            for(char c : str) {
                if(c >= 'a' && c <= 'z') {
                    anagram[c - 'a'] += 1;
                }
            }
            anagrams[anagram].push_back(str);
        }

        for(const auto& anagram : anagrams) {
            result.push_back(anagram.second);
        }
        return result;
    }
};
