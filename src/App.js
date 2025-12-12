import React, { useState } from 'react';
import './styles.css';
import face from './img/heads_a.jpg';
import tail from './img/tails_b.jpg';

let flipResults = [];
const coinFlip = ['Heads', 'Tails'];

export default function App() {
  const [flips, setFlips] = useState(0);
  const [imageSrc, setImageSrc] = useState(face);
  const [message, setMessage] = useState('');

  function flipCoinWithState(isHeads) {
    let randomIndex = Math.floor(Math.random() * coinFlip.length);
    setFlips(flips + 1); //when coin fliped add +1

    let actualResult = coinFlip[randomIndex]; // "Heads" or "Tails"

    let currentFlip;
    if (randomIndex == 0) {
      setImageSrc(face);
      currentFlip = 'face';
    } else {
      setImageSrc(tail);
      currentFlip = 'tail';
    }

    flipResults.push(currentFlip);

    if (
      (isHeads && actualResult === 'Heads') ||
      (!isHeads && actualResult === 'Tails')
    ) {
      setMessage('You win!');
    } else {
      setMessage('You lose!');
    }
  }
  return (
    <div className="App">
      <h1>Heads or Tails</h1>
      <div>
        <label id="message">{message}</label>
      </div>
      <img id="coin" src={imageSrc} alt="top" />

      <div className="button-group">
        <button type="button" onClick={() => flipCoinWithState(true)}>
          Heads
        </button>
        <button type="button" onClick={() => flipCoinWithState(false)}>
          Tails
        </button>
      </div>
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
