// Game Logic

// status of the game classes in the css 
const TILE_STATUSES = {
    HIDDEN : "hidden",
    MINE: "mine",
    NUMBER: "number",
    MARKED: "marked"
}
// 2 for loops so we can create board (grid)
export function createBoard(boardSize, numberOfMines) {
    const board = []
    const minePositions = getMinePositions(boardSize, numberOfMines)
    for (let x = 0; x <boardSize; x++) {
        const row = []
        for(let y = 0; y <boardSize; y++){
            const element = document.createElement("div")
            element.dataset.status = TILE_STATUSES.HIDDEN // default 

        const tile = {
            element,
            x,
            y,
            mine: true,
            get status() {
                return element.dataset.status
            },
            set status(value) {
                this.element.dataset.status = value
            }
        }

        row.push(tile)
        }
        board.push(row)
    }
    return board
}