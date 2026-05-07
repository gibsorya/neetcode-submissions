class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        hm = {}
        
        for i in range(0, len(nums)):
            if nums[i] in hm:
                return nums[i]
            else:
                hm[nums[i]] = True

        return -1