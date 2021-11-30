
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// components
import Home from './pages/home/home'
import Signup from './pages/signup/signup'
import Login from './pages/login/login';

function App() {
  return (
    <Router>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes >
    </Router>  
    );
}


export default App;
