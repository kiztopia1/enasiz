
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


// components
import Home from './pages/home'
import Signup from './pages/signup'
import './App.css';

function App() {
  return (
    <Router>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes >
    </Router>  
    );
}


export default App;
