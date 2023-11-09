import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Cart from './Components/Cart';
import Home from './Components/Home';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
