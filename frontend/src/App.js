import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SignUp from './pages/auth/signUp/SignUp';
import SignIn from './pages/auth/signIn/SignIn';

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


          <Route exact path="/register" element={<SignUp/>}/>
          <Route exact path="/login" element={<SignIn/>}/>

      </Routes>
    </div>
  );
}

export default App;
