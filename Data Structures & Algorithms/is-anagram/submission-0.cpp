class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length() != t.length()) {
            return false;
        }

        std::unordered_map<char, int> s_count;
        std::unordered_map<char, int> t_count;

        for(int i = 0; i < s.length(); i++) {
            s_count[s[i]]++;
            t_count[t[i]]++;
        }

        return s_count == t_count;
    }
};
