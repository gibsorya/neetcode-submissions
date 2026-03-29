class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0;
        let l = 0, r = heights.length - 1;

        while(l <= r) {
            let maxHeight = Math.min(heights[l], heights[r])
            let distance = r - l
            result = Math.max(maxHeight * distance, result)
            

            if(heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return result;
    }
}
