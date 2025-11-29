export default function App() {
  return (
    <div className="App">
      <h1>Heads or Tails</h1>
      {imageFace()}
      {imageTail()}
    </div>
  );
}

const face = require('./img/s801_a.jpg');
export function imageFace() {
  return <img src={face} />;
}

const tail = require('./img/s801_b.jpg');
export function imageTail() {
  return <img src={tail} />;
}
