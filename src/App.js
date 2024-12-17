import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MessageBoard from "./components/MessageBoard";
import NewsFeed from "./components/NewsFeed";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";
import Detailed from './components/Detailed'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: #f3f4f6;
    color: #333;
  }
`;

const App = () => {
  
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<MessageBoard />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/news/:id" element={<Detailed/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
