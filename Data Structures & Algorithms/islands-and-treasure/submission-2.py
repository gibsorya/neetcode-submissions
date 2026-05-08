class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        ROWS, COLS = len(grid), len(grid[0])
        queue = deque()
        visited = set()

        def addCell(r, c):
            if (min(r, c) < 0 or r == ROWS or c == COLS or
                (r, c) in visited or grid[r][c] == -1):
                return
            visited.add((r, c))
            queue.append([r, c])
        
        for row in range(ROWS):
            for col in range(COLS):
                if grid[row][col] == 0:
                    queue.append([row, col])
                    visited.add((row, col))
    
        neighbors = [[1,0],[-1,0],[0,1],[0,-1]]
        level = 0
        while queue:
            for i in range(len(queue)):
                r, c = queue.popleft()
                grid[r][c] = level
                for dr, dc in neighbors:
                    if (min(r + dr, c + dc) < 0 or
                        r + dr == ROWS or c + dc == COLS or
                        (r + dr, c + dc) in visited or grid[r + dr][c + dc] == -1):
                            continue
                    visited.add((r + dr, c + dc))
                    queue.append([r + dr, c + dc])
            level += 1