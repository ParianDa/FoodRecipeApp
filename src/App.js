import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FoodSearchWindow from './components/FoodSearchWindow.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route element={<FoodSearchWindow/>} path='/'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
