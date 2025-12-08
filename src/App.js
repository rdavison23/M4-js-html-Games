import React, { useState } from 'react';
import './styles.css';
import face from './img/heads_a.jpg';
import tail from './img/tails_b.jpg';

let flipResults = [];
export default function App() {
 
  const [flips, setFlips] = useState(0);
  const [imageSrc, setImageSrc] = useState(face);
  function flipCoinWithState() {
    let randomIndex = Math.floor(Math.random() * coinFlip.length);
    setFlips(flips + 1);
    console.log(flips);
    let currentFlip = null
    if (randomIndex == 0) {
      setImageSrc(face);
     currentFlip = "face"
    } else {
      setImageSrc(tail);
     currentFlip = "tail"
    }
    flipResults.push(currentFlip)
    console.log(flipResults)
  }

  return (
    <div className="App">
      <h1>Heads or Tails</h1>
      <button type="button" onClick={flipCoinWithState}>
        Click me
      </button>
      <img id="coin" src={imageSrc} alt="top" />
    </div>
  );
}

export function flipCoin() {
  let randomIndex = Math.floor(Math.random() * coinFlip.length);
  if (randomIndex == 0) {
    return face;
  } else {
    return tail;
  }
}

export function imageFace() {
  return <img src={face} alt="Heads" />;
}

export function imageTail() {
  return <img src={tail} alt="Tails" />;
}

const coinFlip = ['Heads', 'Tails'];

for (let i = 0; i < 10; i++) {
  let randomIndex = Math.floor(Math.random() * coinFlip.length);
  console.log('Flip', i + 1, ':', coinFlip[randomIndex]);
}


