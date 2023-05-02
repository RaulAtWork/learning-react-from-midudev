# TIC TAC TOE

[Midudev's TIC TAC TOE github project](https://github.com/midudev/aprendiendo-react/tree/master/projects/02-tic-tac-toe)
<br>
[Midudev's TIC TAC TOE preview](https://midu-react-02.surge.sh/)

Classic Tic Tac Toe game programmed on React

## Requirements

- ✅3x3 grid
- ✅Selectable tiles
- ✅Reset button
- ✅Turn marker
- ✅Game output: p1 win, p2 win, draw

---

## Rework / Optimizations

- Use children on the Tiles to display the content
- Do not use a redux storage
- Contants on separated file for turn
- UpdateBoards handles: newBoard, changeTurn, check win condition
- Consolidate the updateBoard after each turn, do not use a useEffect!
- Winner can be inside an state
- Winner logic: Winner combos, iterate over winner combos determinate winner
- Use modal window for win condition
- If we have a winner prevent board interaction
- ❓use a fushSync for force synchronous update on win condition
- Use local storage to save the game
- Confetti when winner
- Comment code
