import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path="/" 
          element={
          <>
            <Header/>
            <Home/>
            <Footer/>
          </>}/>
      </Routes>
    </div>
  );
}

export default App;
