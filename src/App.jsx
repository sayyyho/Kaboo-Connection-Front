import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Header from "./components/Common/Header";
import HomeMain from "./pages/homepages/HomeMain";
import GlobalStyle from "./components/Common/GlobalStyle";
import { PeopleListPage } from "./pages/PeopleListPage/PeopleListPage.jsx";
import { PeopleDetailPage } from "./pages/PeopleDetailPage/PeopleDetailPage.jsx";
import ChatPage from "./pages/chat/ChatPage";
import KakaoLogin from "./pages/join/KakaoLogin.jsx";
import KakaoRedirect from "./pages/join/KakoRedirect.jsx";
import JoinPage from "./pages/join/JoinPage.jsx";
import RTCPage from "./pages/WebRTC/VideoPage.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PeopleListPage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/video" element={<RTCPage />}></Route>
        <Route path="/list" element={<PeopleListPage />} />
        <Route path="/details" element={<PeopleDetailPage />} />
        <Route path="/login" element={<KakaoLogin />} />
        <Route path="/auth/code/kakao" element={<KakaoRedirect />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </Router>
  );
}

export default App;
