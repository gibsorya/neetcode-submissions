class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        set<string> visited;
        int count = 0;
// dfs(grid, 0, 0, visited)
        for(int r = 0; r < grid.size(); r++) {
            for(int c = 0; c < grid[0].size(); c++) {
                string cell = to_string(r) + ',' + to_string(c);
                if(grid[r][c] == '1' && !visited.contains(cell)) {
                    dfs(grid, r, c, visited);
                    count++;
                }
            }
        }
        
        return count;
    }

    void dfs(vector<vector<char>>& grid, int r, int c, set<string>& visited) {
        int ROWS = grid.size(), COLS = grid[0].size();
        
        if(min(r, c) < 0 || r == ROWS || c == COLS || grid[r][c] == '0') return;

        string cell = to_string(r) + ',' + to_string(c);
        if(visited.contains(cell)) return;

        visited.insert(cell);
        dfs(grid, r + 1, c, visited);
        dfs(grid, r - 1, c, visited);
        dfs(grid, r, c + 1, visited);
        dfs(grid, r, c - 1, visited);
    }
};
