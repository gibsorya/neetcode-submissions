class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String,ArrayList<String>> anagrams = new HashMap<String,ArrayList<String>>();


        for(String str : strs) {
            int[] counts = new int[26];

            for(char c : str.toCharArray()) {
                counts[c - 'a'] += 1;
            }

            String key = Arrays.toString(counts);
            if(!anagrams.containsKey(key)) anagrams.put(key, new ArrayList<String>());

            anagrams.get(key).add(str);
        }


        return new ArrayList<>(anagrams.values());
    }
}
