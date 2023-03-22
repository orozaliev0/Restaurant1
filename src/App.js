import './App.scss';
import {Routes, Route} from "react-router-dom";
import DetailPage from "./component/pages/detail-page/DetailPage";
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
