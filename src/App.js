import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Main from './components/Main';
import MyPage from './components/MyPage';
import Upload from './components/Upload';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* {loading ? <Loading/> : */}
        <div className="App">
          {/* <ScrollToTop /> */}
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/main' element={<Main />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/upload' element={<Upload />} />
          </Routes>   
        </div>
        {/* } */}
      </BrowserRouter>
  );
}

export default App;
