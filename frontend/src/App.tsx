import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RedirectHere from "./auth/AuthRedirect";
import Login from './auth/Login';
import Content from './components/Content';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='redirect-here' element={<RedirectHere />} />
          <Route path='home' element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
