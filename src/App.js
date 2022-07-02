import "./App.css";
import { useState, useMemo, useEffect } from "react";
import Card from "./components/Card/Card";

import Confetti from "react-confetti";

import { motion } from "framer-motion";
function App() {
  //Setting the States
  function shuffle(arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
      j = Math.floor(Math.random() * (index + 1));
      x = arr[index];
      arr[index] = arr[j];
      arr[j] = x;
    }
    return arr;
  }
  const items = shuffle([
    { text: "Kelly’s eye", selected: false },
    { text: "One little duck", selected: false },
    { text: "Cup of tea", selected: false },
    { text: "Knock at the door", selected: false },
    { text: "Man alive", selected: false },
    { text: "Tom Mix/Half a dozen", selected: false },
    { text: "Lucky seven", selected: false },
    { text: "Garden gate", selected: false },
    { text: "Doctor’s orders", selected: false },
    { text: "Stairway to heaven", selected: false },
    { text: "Legs eleven", selected: false },
    { text: "One dozen", selected: false },
    { text: "Unlucky for some", selected: false },
    { text: "Valentine’s Day", selected: false },
    { text: "Young and keen", selected: false },
    { text: "Sweet 16 and never been kissed", selected: false },
    { text: "Dancing queen", selected: false },
    { text: "Coming of age", selected: false },
    { text: "Goodbye teens", selected: false },
    { text: "One score", selected: false },
    { text: "Royal salute/Key of the door", selected: false },
    { text: "Two little ducks", selected: false },
    { text: "Thee and me", selected: false },
    { text: "Two dozen", selected: false },
    { text: "Up to tricks", selected: false },
  ]);
  console.log(items);
  const [cards, setCards] = useState(items);
  const [bingos, setBingos] = useState(0);
  //Repeat Game function, sets Cards aswell as returning win to false
  const repeatGame = () => {
    setCards([
      { text: "Kelly’s eye", selected: false },
      { text: "One little duck", selected: false },
      { text: "Cup of tea", selected: false },
      { text: "Knock at the door", selected: false },
      { text: "Man alive", selected: false },
      { text: "Tom Mix/Half a dozen", selected: false },
      { text: "Lucky seven", selected: false },
      { text: "Garden gate", selected: false },
      { text: "Doctor’s orders", selected: false },
      { text: "Stairway to heaven", selected: false },
      { text: "Legs eleven", selected: false },
      { text: "One dozen", selected: false },
      { text: "Unlucky for some", selected: false },
      { text: "Valentine’s Day", selected: false },
      { text: "Young and keen", selected: false },
      { text: "Sweet 16 and never been kissed", selected: false },
      { text: "Dancing queen", selected: false },
      { text: "Coming of age", selected: false },
      { text: "Goodbye teens", selected: false },
      { text: "One score", selected: false },
      { text: "Royal salute/Key of the door", selected: false },
      { text: "Two little ducks", selected: false },
      { text: "Thee and me", selected: false },
      { text: "Two dozen", selected: false },
      { text: "Up to tricks", selected: false },
    ]);
    setBingos(0);
  };
  //SelectedArr produces a binary Array where the elements would be something like [1,0,0].. with 1's being elements that are selected
  //Using Memoization to avoid unnecessary computation of this algorithm
  const selectedArr = useMemo(
    () =>
      cards.map((el, idx) => {
        if (el.selected || idx === 12) return 1;
        else return 0;
      }),
    [cards]
  );
  //Win-Condition, using useEffect here to improve performance
  useEffect(() => {
    //Diagonal Sums
    if (
      selectedArr[0] === 1 &&
      selectedArr[6] === 1 &&
      selectedArr[18] === 1 &&
      selectedArr[24] === 1
    )
      setBingos((prev) => prev + 1);

    if (
      selectedArr[4] === 1 &&
      selectedArr[8] === 1 &&
      selectedArr[16] === 1 &&
      selectedArr[20] === 1
    )
      setBingos((prev) => prev + 1);

    let horizontalSum = [];
    let verticalSum = [];
    //Horizontal SUm
    for (let index = 0; index < selectedArr.length; index += 5) {
      //Horizontal
      const newArr = selectedArr.slice(index, index + 5);

      const rowSum = newArr.reduce((sum, acc) => sum + acc, 0);
      if (rowSum === 5) setBingos((prev) => prev + 1);

      horizontalSum.push(rowSum);
    }
    //Vertical Sum --Needs improvement
    for (let i = 0; i < 5; i++) {
      //Vertical
      let currSum = selectedArr[i];
      for (let j = 1; j < 5; j++) {
        currSum += selectedArr[i + j * 5];
      }
      if (currSum === 5) setBingos((prev) => prev + 1);
      verticalSum.push(currSum);
    }
  }, [selectedArr]);
  return (
    <div className="App">
      {bingos > 0 ? (
        <div>
          <Confetti />
          <div className="won">
            <h1 className="wonText">You Won!</h1>
            <p>You got {bingos} Bingos!</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="wonButton"
              onClick={repeatGame}
            >
              Play Again!
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="bingo">
          {cards.map((el, idx) => (
            <Card key={idx} cards={cards} setCards={setCards} number={idx + 1}>
              {idx === 12 ? "FREE" : el.text}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
