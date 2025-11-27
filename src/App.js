export default function App() {
  return (
    <div className="App">
      <h1>Hello from Techtonica</h1>
      {imageFace()}
    </div>
  );
}

const face = require('./img/s801_a.jpg');
export function imageFace() {
  return <img src={face} />;
}
