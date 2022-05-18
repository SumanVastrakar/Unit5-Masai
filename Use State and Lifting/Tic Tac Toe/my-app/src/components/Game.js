import React, { useState } from 'react'
import "./game.css"

export default function Game() {
    const [turn, setTurn] = useState("X")
    const [boxes, setBoxes] = useState(Array(9).fill(""))
    const [winner, setWinner] = useState(null)

    const winnerCheck = (grid) =>{
  let possibleCombinations = {
    horizontal : [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, ,8],
    ],
    vertical : [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 6],
    ],
    daigonal : [
        [0, 4, 8],
        [2, 4, 6],
    ]
  };

  for ( let key in possibleCombinations){
    possibleCombinations[key].forEach(elem => {
       if( grid[elem[0]] === "" || grid[elem[1]] == "" || grid[elem[2]] == ""){
        //    continue;
       }else if(grid[elem[0]] === grid[elem[1]] &&  grid[elem[1]] === grid[elem[2]]) {
         setWinner(grid[elem[0]])
       }
    });
  }
    }

    const handleClick = (value) => {
        if( boxes[value] !== ""){
            return;
        }
    let grid = [...boxes];

        if (turn === "X") {
            grid[value] = "X";
            setTurn("O")
        } else {
            setTurn("X")
            grid[value] = "O";
        }
        winnerCheck(grid)
        setBoxes(grid)
        console.log(grid)
    }



    const Box = ({ value }) => {
        return <td onClick={() => handleClick(value)}>{boxes[value]}</td>
    }

    const reset = () =>{
    setWinner(null)
  setBoxes(Array(9).fill(""))
    }
    return (
        <div className='container'>

            <table>
                <h3>Turn For : {turn}</h3>
                <tbody>
                    <tr>
                        <Box value={0} />
                        <Box value={1} />
                        <Box value={2} />

                    </tr>
                    <tr>
                        <Box value={3} />
                        <Box value={4} />
                        <Box value={5} />

                    </tr>
                    <tr>
                        <Box value={6} />
                        <Box value={7} />
                        <Box value={8} />

                    </tr>
                </tbody>
            </table>
            {
                winner && (
                    <div>
                        <p> {winner} is the winner</p>
                        <button onClick={reset}>Reset</button>
                    </div>
                )
            }
        </div>
    )
}
