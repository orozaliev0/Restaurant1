import './App.scss';
import Hero from "./component/hero/Hero";
import About from "./component/about/About";
import Best from "./component/best/Best";
import Main from "./component/main/Main";
import Modem from "./component/modem/Modem";
import Contact from "./component/contact/Contact";
import {Routes, Route} from "react-router-dom";
import DetailPage from "./component/pages/detail-page/DetailPage";
import Header from "./component/header/Header";
import MainPage from "./component/main-page/MainPage";
import Menu from "./component/pages/menu/Menu";


function App() {
  return (
    <div className="App">




        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/menu'} element={<Menu/>}/>
            <Route path={'/menu/detail-page'} element={<DetailPage/>}/>
        </Routes>

    </div>
  );
}

export default App;
