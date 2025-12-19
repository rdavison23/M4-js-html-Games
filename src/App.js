// Import React and the useState hook for managing component state
import React, { useState } from 'react';
import './styles.css'; // Import the CSS file for styling

// Import the images used for the coin faces
import face from './img/heads_a.jpg';
import tail from './img/tails_b.jpg';

// Array to store the history of flip results (not displayed but tracked)
let flipResults = [];

// Possible outcomes of a coin flip
const coinFlip = ['Heads', 'Tails'];

// List of random win messages to keep the game fun
const youWin = [
  'You win!!',
  'Congrats',
  'You nailed it!',
  'Winner winner, coin-flip dinner!',
  'Boom! You crushed it!',
  'Luck is on your side!',
];

// List of random lose messages for variety
const youLose = [
  'Flip again!',
  'Not this time...',
  'Oof, close one!',
  'Keep flipping, your luck will turn!',
  'Missed it — but don’t give up!',
  'Try again, fortune favors the bold!',
];

// Main App component
export default function App() {
  // State variables to track game stats and UI updates
  const [flips, setFlips] = useState(0); // total number of flips
  const [wins, setWins] = useState(0); // total number of correct guesses
  const [streak, setStreak] = useState(0); // current win streak
  const [imageSrc, setImageSrc] = useState(face); // current coin image
  const [message, setMessage] = useState('Your move: heads or tails?'); // message shown to player

  // Function that runs every time the user clicks Heads or Tails
  function flipCoinWithState(isHeads) {
    // Generate a random index (0 or 1) to simulate a coin flip
    let randomIndex = Math.floor(Math.random() * coinFlip.length);
    setFlips(flips + 1); //when coin fliped add +1

    let actualResult = coinFlip[randomIndex]; // "Heads" or "Tails"

    // Update the displayed coin image based on the result
    if (randomIndex === 0) {
      setImageSrc(face);
    } else {
      setImageSrc(tail);
    }

    // Store the result in the history array
    flipResults.push(actualResult);

    // Check if the player's guess matches the actual result
    if (
      (isHeads && actualResult === 'Heads') ||
      (!isHeads && actualResult === 'Tails')
    ) {
      // Player guessed correctly choose a random win message
      let randomWin = Math.floor(Math.random() * youWin.length);
      setMessage(youWin[randomWin]);

      // Update wins and streak
      setWins(wins + 1);
      setStreak(streak + 1);
    } else {
      let randomLose = Math.floor(Math.random() * youLose.length);
      setMessage(youLose[randomLose]);

      // Reset streak to zero
      setStreak(0);
    }
  }
  return (
    //what the user sees on the screen
    <div className="App">
      <h1>Heads or Tails</h1>
      <div>
        <label id="message">{message}</label>
      </div>
      <img id="coin" src={imageSrc} alt="top" />
      <div className="totals">
        <p>Total Flips: {flips}</p>
        <p>Total Wins: {wins}</p>
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
