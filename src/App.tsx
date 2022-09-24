import "./App.css";
import Intro from "./components/Intro/Intro";
import Navbar from "./Navbar/Navbar";
import office from "./assets/2636677.png";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div className="App">
      <div style={{ background: "yellow", height: "100vh" }}>
        <Navbar />
        <img src={office}></img>
        <Intro />
      </div>
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;
