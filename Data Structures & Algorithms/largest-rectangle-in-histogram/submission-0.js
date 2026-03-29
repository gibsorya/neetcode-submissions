class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = new Array()
        let maxArea = 0;

        for (let i = 0; i <= heights.length; i++) {
            let start = i;

            while(stack.length > 0 && (i === heights.length || heights[stack[stack.length - 1]] > heights[i])) {
                let height = heights[stack.pop()]
                let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
                maxArea = Math.max(maxArea, width * height)
            }

            stack.push(start)
        }

        return maxArea;
    }
}
