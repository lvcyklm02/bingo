/**
 * Mutable ADT that keeps track of boards played, etc. 
 */
export class Client {
    // Abstraction Function:
    // AF(bingo) = A client currently playing with bingo

    constructor(bingo) {
        this.bingo = bingo;
    }

    /**
     * Returns the current bingo grid that describes the current state of the Client's game
     * 
     * @returns a bingo object of the current bingo grid
     */
    getCurrentBingo() {
        return this.bingo;
    }


    /**
     * Gets bingo that is the result of user click on a cell at (row, col).
     * 
     * @param row 1-index row coordinate of cell that user clicked
     * @param col 1-index column coordinate of cell that user clicked
     * @returns puzzle with board clicked at (row, col)
     */
    click(row, col) {
        this.bingo = this.bingo.click(row, col);
        return this.bingo;
    }

    /**
     * @returns true if the current bingo is solved, false otherwise
     */
    isBingoSolved() {
        return this.bingo.isSolved();
    }

}
