// display/UI 
import { createBoard } from "./minesweaper.js";

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 2


const board = (createBoard(BOARD_SIZE, NUMBER_OF_MINES))
const boardElement  = document.querySelector(".board")
console.log(board)
board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
    })
})
boardElement.style.setProperty("--size", BOARD_SIZE)

// 1. Populate a board with mines 
// 2. left click on tiles 
    // reavel tiles
// 3. right click on tiles
    // mark tiles
// 4. check for win/lose 

