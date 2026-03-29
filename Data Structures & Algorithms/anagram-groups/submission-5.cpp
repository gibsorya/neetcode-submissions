class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> anagrams;

        for(auto str : strs) {
            vector<int> anagram(26);
            for(char c : str) {
                anagram[c - 'a']++;
            }
            string key = to_string(anagram[0]);
            for (int i = 1; i < 26; ++i) {
                key += ',' + to_string(anagram[i]);
            }
            anagrams[key].push_back(str);
        }
        vector<vector<string>> result;
        for(const auto& anagram : anagrams) {
            result.push_back(anagram.second);
        }
        return result;
    }
};
