import './App.scss';
import {Routes, Route} from "react-router-dom";
import DetailPage from "./component/pages/detail-page/DetailPage";
import MainPage from "./component/main-page/MainPage";
import Menu from "./component/pages/menu/Menu";
import About from "./component/about/About";
import Footer from "./component/footer/Footer";
import Contact from "./component/contact/Contact";
import Tabb from "./component/pages/tab/Tabb";


function App() {

  return (
    <div className="App">
<Tabb/>
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/menu'} element={<Menu/>}/>
            <Route path={'/menu/detail-page'} element={<DetailPage/>}/>
            <Route path={'/about-us'} element={<About/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
        </Routes>

    </div>
  );
}

export default App;
