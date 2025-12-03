import React from 'react';
import face from './img/heads_a.jpg';
import tail from './img/tails_b.jpg';

export default function App() {
  return (
    <div className="App">
      <h1>Heads or Tails</h1>
      <button type="button">Click me</button>
      <img id="coin" src={flipCoin()} alt="top" />
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
