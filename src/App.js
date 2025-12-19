import React, { useState } from 'react';
import './styles.css';
import face from './img/heads_a.jpg';
import tail from './img/tails_b.jpg';

let flipResults = [];
const coinFlip = ['Heads', 'Tails'];
const youWin = [
  'You win!!',
  'Congrats',
  'You nailed it!',
  'Winner winner, coin-flip dinner!',
  'Boom! You crushed it!',
  'Luck is on your side!',
];
const youLose = [
  'Flip again!',
  'Not this time...',
  'Oof, close one!',
  'Keep flipping, your luck will turn!',
  'Missed it — but don’t give up!',
  'Try again, fortune favors the bold!',
];

export default function App() {
  const [flips, setFlips] = useState(0);
  const [wins, setWins] = useState(0);
  const [streak, setStreak] = useState(0);
  const [imageSrc, setImageSrc] = useState(face);
  const [message, setMessage] = useState('Your move: heads or tails?');

  function flipCoinWithState(isHeads) {
    let randomIndex = Math.floor(Math.random() * coinFlip.length);
    setFlips(flips + 1); //when coin fliped add +1

    let actualResult = coinFlip[randomIndex]; // "Heads" or "Tails"

    if (randomIndex === 0) {
      setImageSrc(face);
    } else {
      setImageSrc(tail);
    }

    flipResults.push(actualResult);

    if (
      (isHeads && actualResult === 'Heads') ||
      (!isHeads && actualResult === 'Tails')
    ) {
      let randomWin = Math.floor(Math.random() * youWin.length);
      setMessage(youWin[randomWin]);
      setWins(wins + 1);
      setStreak(streak + 1);
    } else {
      let randomLose = Math.floor(Math.random() * youLose.length);
      setMessage(youLose[randomLose]);
      setStreak(0);
    }
  }
  return (
    <div className="App">
      <h1>Heads or Tails</h1>
      <div>
        <label id="message">{message}</label>
      </div>
      <img id="coin" src={imageSrc} alt="top" />
      <div>
        <p>Total flips: {flips}</p>
        <p>Total wins: {wins}</p>
        <p>Win Streak: {streak}</p>
      </div>
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

export function imageFace() {
  return <img src={face} alt="Heads" />;
}

export function imageTail() {
  return <img src={tail} alt="Tails" />;
}
