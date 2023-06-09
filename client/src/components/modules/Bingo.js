
/**
 * Immutable ADT, generates new Bingo board if receives click from user, 
 * and checks if bingo is solved or not.
 */
export class Bingo {

    //Abstraction Function: 
    //AF(tasks, completed_mask) = a 5x5 bingo board with string tasks per square taken from the beginning  
    //                         of tasks, starting in 0 left upper corner. As the user clicks on 
    //                         the board to complete tasks, recorded in booleans in the completed_mask 2D array.
    //

    constructor(tasks, completed_mask = null) {
        this.tasks = tasks;
        if (completed_mask == undefined) {
            this.completed_mask = [];

            for (let row = 0; row < 5; row++) {
                let new_row = [];
                for (let col = 0; col < 5; col++) {
                    new_row.push(false);
                }
                this.completed_mask.push(new_row);
            }
        } else {
            this.completed_mask = completed_mask;
        }

    }

    /**
     * return tasks as a single string list
     */
    toString() {
        let task_list = "";
        let counter = 0;
        let isDone = "";

        for (const task of this.tasks) {
            if (this.completed_mask[Math.floor(counter / 5)][counter % 5]) {
                isDone = "| DONE";
            } else {
                isDone = "";
            }

            task_list = task_list + (counter + 1) + ". " + task + isDone + "\n";
            counter++;
        }

        if (this.isBingo()) {
            task_list = task_list + "BINGO!"
        } else {
            task_list = task_list + "NOT BINGO!"
        }

        return task_list
    }

    /**
     * Returns bingo post user click
     * 
     * @param row 1-index row coordinate of cell that user clicked
     * @param col 1-index column coordinate of cell that user clicked
     * @returns new Puzzle instance that is the result of a user clicking on the (row, col)
     *          coordinate cell of the bingo, which means modified mask at location
     */
    click(click_row, click_col) {
        new_completed_mask = [];

        for (let row = 0; row < 5; row++) {
            let new_row = [];
            for (let col = 0; col < 5; col++) {
                new_row.push(this.completed_mask[r][c]);
            }
            new_completed_mask.push(new_row);
        }

        new_completed_mask[click_row][click_col] = !new_completed_mask[click_row][click_col];

        return new Bingo(this.tasks, new_completed_mask);
    }

    /**
     * return if any row, col, or diagonal has been completed.
     */
    isBingo() {

        // check rows
        for (let row = 0; row < 5; row++) {
            let rowIsBingo = true;
            for (let col = 0; col < 5; col++) {
                if (!this.completed_mask[row][col]) {
                    rowIsBingo = false;
                    break;
                }
            }

            if (rowIsBingo) {
                return true;
            }
        }

        // check cols
        for (let col = 0; col < 5; col++) {
            let colIsBingo = true;
            for (let row = 0; row < 5; row++) {
                if (!this.completed_mask[row][col]) {
                    colIsBingo = false;
                    break;
                }
            }

            if (colIsBingo) {
                return true;
            }
        }

        // check diagonals using (r,c)
        let first = [(0, 0), (1, 1), (2, 2), (3, 3), (4, 4)];
        let second = [(0, 4), (1, 3), (2, 2), (3, 1), (4, 0)];

        if (!(first.some((r, c) => !this.completed_mask[r][c]))) {
            return true;
        }
        if (!(second.some((r, c) => !this.completed_mask[r][c]))) {
            return true;
        }
    }

}

