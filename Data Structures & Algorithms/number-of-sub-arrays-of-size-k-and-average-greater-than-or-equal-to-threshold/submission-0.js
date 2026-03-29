class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let result = 0;
        let sub = [];
        let sum = 0;

        let L = 0;

        for(let R = 0; R < arr.length; R++) {
            if(R - L + 1 > k) {
                // window.delete(arr[L])
                sum -= arr[L]
                sub.shift();
                L++
            }

            console.log("R", R, "L", L, sum)
            sub.push(arr[R])
            console.log("SUB", sub)
            sum += arr[R]
            let avg = sum / k;

            if(avg >= threshold && sub.length === k) {
                result++;
            }
            console.log()
        }

        return result;
    }
}
