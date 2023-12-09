import Background from "./components/Background";
import Card from "./components/Card";
import Foreground from "./components/Foreground";


function App() {
  return (
    <div className="relative w-full h-screen pt-10 bg-zinc-800">
      <Background/>
      <Foreground/>
      <Card/>
    </div>
  );
}

export default App;
