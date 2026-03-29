class Solution {
public:
    int countPaths(vector<vector<int>>& grid) {
        set<string> visit;
        return dfs(grid, 0, 0, visit);
    }

private:
    int dfs(vector<vector<int>>& grid, int r, int c, set<string>& visit) {
        int ROWS = grid.size(), COL = grid[0].size();
        string cell = to_string(r) + ',' + to_string(c);

        if(min(r, c) < 0 || r == ROWS || c == COL || visit.contains(cell) || grid[r][c] == 1) {
            return 0;
        }
        if(r == ROWS - 1 && c == COL - 1) {
            return 1;
        }

        visit.insert(cell);
        int count = 0;
        count += dfs(grid, r + 1, c, visit);
        count += dfs(grid, r - 1, c, visit);
        count += dfs(grid, r, c + 1, visit);
        count += dfs(grid, r, c - 1, visit);

        visit.erase(cell);
        return count;
    }
};
