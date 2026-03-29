class Solution {
private:
    vector<vector<int>> neighbors = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
public:
    int shortestPath(vector<vector<int>>& grid) {
        int ROWS = grid.size(), COLS = grid[0].size();
        set<string> visited;
        queue<pair<int, int>> q;
        int length = 0;
        
        visited.insert("0,0");
        q.push({0,0});

        while(!q.empty()) {
            int size = q.size();
            for(int i = 0; i < size; i++) {
                pair<int, int> cell = q.front();
                int r = cell.first, c = cell.second;
                q.pop();

                if(r == ROWS - 1 && c == COLS - 1) {
                    return length;
                }

                for(vector<int>& neighbor : neighbors) {
                    int dr = neighbor[0], dc = neighbor[1];
                    string next = to_string(r + dr) + "," + to_string(c + dc);
                    if(min(r + dr, c + dc) < 0 || 
                        r + dr == ROWS || 
                        c + dc == COLS || 
                        visited.contains(next) ||
                        grid[r + dr][c + dc] == 1) {
                            continue;
                    }

                    q.push({r + dr, c + dc});
                    visited.insert(next);
                }
            }
            length++;
        }

        return -1;
    }
};
