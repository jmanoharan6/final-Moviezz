import '../css/App.css';
import React,{useState,useContext,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import moviezzContext from '../context/moviezzContext';
import Header from './Header'
import Hero from './Hero';
import Movies from './Movies';
import Tvshows from './Tvshows';
import Content from './Content';
import Footer from './Footer';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MovieList from './MovieList';
import Tvlist from './Tvlist';
import Description from './Description'



function App() {
  const [heros, setHeros] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvshows, setTvShows] = useState([]);
  const [movielists, setMovielists] = useState([]);
  const [tvlists, setTvlists] = useState([]);
  const [headerButtonText, setHeaderButtonText] = useState(["Sign In"]);
  const [headerButtonLink, setHeaderButtonLink] = useState(["/login"]);

  useEffect(()=>{

    //Async operation GET
    fetch ("http://localhost:3000/movielist")
    .then((res)=>{

      return res.json()
    })
    .then(json=>{    
        setMovielists(json);
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })


},[])
 
  return (
    <Router>
      <Switch>
        <moviezzContext.Provider value={{heros, setHeros, movies, setMovies,tvshows, setTvShows, movielists,setMovielists ,tvlists,setTvlists,headerButtonLink,setHeaderButtonLink,headerButtonText, setHeaderButtonText}}>
         <Route exact path="/">
            <Header />
            <Hero/>
            <Movies/>
            <Tvshows/>
            <Content/>
            <Footer/>
          </Route>
          <Route exact path="/login">
          <Header />
          <Login/>
          <Footer/>
        </Route>
        <Route exact path="/register">
          <Header />
          <Register/>
          <Footer/>
        </Route>
        <Route exact path="/movielist">
          <Header />
          <MovieList/>
          <Footer/>
        </Route>
        <Route exact path="/tvlist">
          <Header />
          <Tvlist/>
          <Footer/>
        </Route>
       
        </moviezzContext.Provider>
      </Switch>
    </Router>    
  );
}

export default App;
