class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let result = new Array(temperatures.length).fill(0)
        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i]
            while(stack.length > 0 && t > temperatures[stack[stack.length - 1]]) {
                    let index = stack.pop()
                    result[index] = i - index 
            }
            stack.push(i)
        }

        return result;
    }
}
