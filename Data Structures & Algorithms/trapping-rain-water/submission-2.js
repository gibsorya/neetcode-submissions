class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // two pointers, left being at index 0 and right being at the last index
        let l = 0, r = height.length - 1;
        let res = 0;

        // we need to get the curr max height on both the left and right sides
        // each max represnts the max amount of water
        let leftMax = height[l]
        let rightMax = height[r]
        while(l < r) {
            console.log("HEIGHT", height[l], height[r])
            if(leftMax < rightMax) {
                console.log("left max", leftMax)

                l++;
                leftMax = Math.max(leftMax, height[l]);
                console.log("height", height[l])
                res += leftMax - height[l];
            } else {
                console.log(" right max", rightMax)
                r--;
                rightMax = Math.max(rightMax, height[r]);
                console.log("height", height[r])
                res += rightMax - height[r]
            }
            console.log("RES", res)
            console.log()
        }
        return res;
    }
}
