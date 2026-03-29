class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let L = Math.max(...weights);
        let R = weights.reduce((a, b) => a + b, 0)
        let res = R;

        const canShip = (cap) => {
            let ships = 1, currCap = cap
            for (const w of weights) {
                if(currCap - w < 0) {
                    ships++;

                    if(ships > days) {
                        return false
                    }

                    currCap = cap;
                }

                currCap -= w;
            }
            return true;
        }

        while (L <= R) {
            let cap = Math.floor(L + (R - L) / 2)

            if(canShip(cap)) {
                res = Math.min(res, cap)
                R = cap - 1
            } else {
                L = cap + 1
            }
        }

        return res;
    }
}
