class Solution {
private:
    int directions[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int area = 0;

        for(int r = 0; r < grid.size(); r++) {
            for(int c = 0; c < grid[0].size(); c++) {
                if(grid[r][c] == 1) {
                    area = max(area, dfs(grid, r, c));
                }
            }
        }
        return area;
    }

    int dfs(vector<vector<int>>& grid, int r, int c) {
        if(min(r, c) < 0 || r >= grid.size() || c >= grid[0].size() || grid[r][c] == 0) {
            return 0;
        }
        grid[r][c] = 0;
        int count = 1;
        for(int i = 0; i < 4; i++) {
            count += dfs(grid, r + directions[i][0], c + directions[i][1]);
        }
        return count;
    }
};
