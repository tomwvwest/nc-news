import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ArticlesContainer } from "./components/ArticlesPage";
import { ArticlePage } from "./components/ArticlePage";
import { ProfilePage } from "./components/ProfilePage";
import { TopicsPage } from "./components/TopicsPage";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/articles" element={<ArticlesContainer />}></Route>
        <Route path="/articles/:articleId" element={<ArticlePage />}></Route>
        <Route path="/profile/:username" element={<ProfilePage />}></Route>
        <Route path="/topics" element={<TopicsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
