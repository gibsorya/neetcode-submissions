class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        /** 
         * @type {Set<number>}
        */
        let visited = new Set()
        /** 
         * @type {Map<number, number[]>}
        */
        let courses = new Map()

        for(let i = 0; i < numCourses; i++) {
            courses.set(i, [])
        }

        for(let [crs, pre] of prerequisites) {
            courses.get(crs).push(pre)
        }

        /**
         * @param {number} course
         * @return {boolean}
         */
        const dfs = (course) => {
            if(visited.has(course)) {
                return false;
            }

            if(courses.get(course).length === 0) return true;

            visited.add(course);

            for(let pre of courses.get(course)) {
                if(!dfs(pre)) {
                    return false;
                }
            }
            visited.delete(course)
            courses.set(course, [])
            return true;
        }

        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) {
                return false;
            }
        }

        return true;
    }
}
