class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow, fast = 0, 0
        # for i in range(0, len(nums)):
            
        #     if nums[abs(nums[i]) - 1] < 0:
        #         return abs(nums[i])
        #     else:
        #         nums[abs(nums[i]) - 1] *= -1

        # return -1
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break

        slow2 = 0
        while True:
            slow = nums[slow]
            slow2 = nums[slow2]
            if slow == slow2:
                return slow

# [ 2, 1, 2, 3 ]
# [ 2, -1, 2, 3 ]
# [ -2, -1, 2, 3 ]
