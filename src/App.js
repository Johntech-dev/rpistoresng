import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Search from './component/header/Search';
import Login from './auth/Login'
import Register from './auth/Register'
import Reset from './auth/Reset'

function App() {
  return (
   <>
   <BrowserRouter>
     <Header />
        <Routes>
          {/* <Route path="/" element={ <Home />} /> */}
          <Route path="/Login" element={ <Login />} />
          <Route path="/Register" element={ <Register />} />
          <Route path="/Reset" element={ <Reset />} />
        </Routes>
     {/* <Footer /> */}
   </BrowserRouter>
   </>
  );
}

export default App;