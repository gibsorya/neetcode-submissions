class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        threshold *= k;
        let result = 0;
        let sum = 0;

        for(let R = 0; R < arr.length; R++) {
            sum += arr[R]
            if(R >= k - 1) {
                if(sum >= threshold) {
                    result++;
                }
                sum -= arr[R - k + 1]
            }
        }

        return result;
    }
}
