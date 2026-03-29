class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0, right = nums.length - 1;
        let minNum = nums[0];
        while(left <= right) {
            if(nums[left] <= nums[right]) {
                minNum = Math.min(minNum, nums[left]);
                break;
            }

            let mid = left + Math.floor((right - left) / 2)
            minNum = Math.min(minNum, nums[mid]);
            if(nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return minNum;
    }
}

/*
nums = [5,0,1,2,3,4]
left = 0, right = 5, mid = 2

nums[left] = 5, nums[right] = 4, nums[mid] = 1
*/