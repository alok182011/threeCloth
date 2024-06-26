import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Experience";

const App = () => {
  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
    </>
  );
};

export default App;
