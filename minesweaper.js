// Game Logic

// status of the game classes in the css 
export const TILE_STATUSES = {
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
            // check if one of them match current x,y cordionates
            // The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element
            mine: minePositions.some(positionMatch.bind(null, {x, y})),
            get status() {
                return element.dataset.status
            },
            // updating status, changing background color
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

// some- if at least one of the elements match the search in array
function getMinePositions(boardSize, numberOfMines) {
    const positions = []

    while (positions.length < numberOfMines) {
      const position = {
        x: randomNumber(boardSize),
        y: randomNumber(boardSize),
      }
  // if they already exist we will skip adding them
      if (!positions.some(positionMatch.bind(null, position))) {
        positions.push(position)
      }
    }
  
    return positions
}
// checking if they have same cordinates 
function positionMatch(a, b) {
    return a.x === b.x && a.y === b.y
  }
  // generate random position
  function randomNumber(size) {
    return Math.floor(Math.random() * size)
  }

  // checking tile status (right click)
 export function markTile(tile) {
    if (
      tile.status !== TILE_STATUSES.HIDDEN &&
      tile.status !== TILE_STATUSES.MARKED
    ) {
      return
    }
  
    if (tile.status === TILE_STATUSES.MARKED) {
      tile.status = TILE_STATUSES.HIDDEN
    } else {
      tile.status = TILE_STATUSES.MARKED
    }
  }