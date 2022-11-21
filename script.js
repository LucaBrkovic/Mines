// display/UI 
import { createBoard, markTile } from "./minesweaper.js";
// 1. Populate a board with mines 
const BOARD_SIZE = 10
const NUMBER_OF_MINES = 2


const board = (createBoard(BOARD_SIZE, NUMBER_OF_MINES))
const boardElement  = document.querySelector(".board")
const minesLeftText = document.querySelector("[data-mine-count]")



console.log(board)

board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
        //2 for left clicks
        tile.element.addEventListener("click", () => {

        })
        //3 for right clicks
        // preventDefault() prevent default behavior of the right click
        tile.element.addEventListener("contextmenu", e => {
            e.preventDefault()
            markTile(tile)
        })
    })
})
boardElement.style.setProperty("--size", BOARD_SIZE)
minesLeftText.textContent = NUMBER_OF_MINES


    // a. reavel tiles

    // b. mark tiles
// 4. check for win/lose 

