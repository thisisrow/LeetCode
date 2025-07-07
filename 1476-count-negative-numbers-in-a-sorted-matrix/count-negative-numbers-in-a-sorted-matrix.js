/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) return 0;

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) {
                count++;
            }
        }
    }

    return count;
};