class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        let res = new Array()

        for(let i = 0; i < nums.length; i++) {
            if(i != 0 && nums[i] === nums[i - 1]) continue;
            let L = i + 1, R = nums.length - 1;

            while(L < R) {
                let sum = nums[i] + nums[L] + nums[R]
                if(sum === 0) {
                    res.push([nums[i],nums[L],nums[R]])
                    L++;
                    R--;
                    while(L < R && nums[L] === nums[L - 1]) {
                        L++;
                    }
                } else if(sum > 0) {
                    R--;
                } else {
                    L++;
                }
            }
        }

        return res;
    }
}


// [-1,0,1,2,-1,-4]
// [-4,-1,-1,-1,0,1,2]