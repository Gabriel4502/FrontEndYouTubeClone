import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import Login from "./pages/login/login";
import Login2 from "./pages/login/login2";
import NameSurname from "./pages/register/emailRegister/nameSurname";
import EmailRegister from "./pages/register/emailRegister/emailRegister";
import VideosUpload from "./pages/YouTubeStudio/ChannelContent";
import LivePage from "./pages/YouTubeStudio/LivePage/livePage";


function App() {
  return (
    <BrowserRouter id="teste">
      <div className="App">
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/library'} element={<Library/>} />
                <Route path={'/history'} element={<History/>} />
                <Route path={'/login'} element={<Login/>} />
                <Route path={'/login2'} element={<Login2/>} />
                <Route path={'/sign-up/nameSurname'} element={<NameSurname/>} />
                <Route path={'/sign-up/emailRegister'} element={<EmailRegister/>} />
                <Route path={'/channel/Content'} element={<VideosUpload/>} />
                <Route path={'/channel/live'} element={<LivePage/>} />
            </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
