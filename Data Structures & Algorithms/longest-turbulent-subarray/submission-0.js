class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let l = 0
        let length = 1

        for(let r = 1; r < arr.length; r++) {
            if(arr[r - 1] == arr[r]) {
                l = r
            } else {
                if(r == arr.length - 1 || 
                    !((arr[r - 1] < arr[r] && arr[r] > arr[r + 1]) || 
                    (arr[r - 1] > arr[r] && arr[r] < arr[r + 1]))) {
                        length = Math.max(length, r - l + 1)
                        l = r
                    }
            }
        }

        return length
    }
}
