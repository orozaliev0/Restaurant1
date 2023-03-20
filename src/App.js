import './App.scss';
import Hero from "./component/hero/Hero";
import About from "./component/about/About";
import Best from "./component/best/Best";
import Main from "./component/main/Main";
import Modem from "./component/modem/Modem";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <div className="App">
        <Hero/>
        <About/>
        <Best/>
        <Main/>
        <Modem/>
        <Contact/>
    </div>
  );
}

export default App;
