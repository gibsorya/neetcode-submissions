class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<ArrayList<Integer>,ArrayList<String>> anagrams = new HashMap<ArrayList<Integer>,ArrayList<String>>();


        for(String str : strs) {
            ArrayList<Integer> counts = new ArrayList<>(Collections.nCopies(26, 0));

            for(char c : str.toCharArray()) {
                counts.set(c - 'a', counts.get(c - 'a') + 1);
            }

            if(!anagrams.containsKey(counts)) anagrams.put(counts, new ArrayList<String>());

            anagrams.get(counts).add(str);
        }

        return new ArrayList<>(anagrams.values());
    }
}
