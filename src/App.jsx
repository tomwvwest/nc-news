import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ArticlesContainer } from "./components/ArticlesPage";
import { ArticlePage } from "./components/ArticlePage";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/articles" element={<ArticlesContainer />}></Route>
          <Route path="/articles/:articleId" element={<ArticlePage />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
