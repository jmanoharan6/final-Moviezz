import React,{useEffect,useContext} from 'react';

import { Carousel } from 'react-responsive-carousel';
import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';
import hero4 from '../images/hero4.jpeg';
import hero5 from '../images/hero5.jpg';
import hero6 from '../images/hero6.jpg';
import hero7 from '../images/hero7.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import moviezzContext from '../context/moviezzContext';



const Hero = () => {
    /*const {heros,setHeros} = useContext(moviezzContext);



    useEffect(()=>{

        //Async operation GET
        fetch ("http://localhost:5000/hero")
        .then((res)=>{
  
          return res.json()
        })
        .then(json=>{    
              setHeros(json);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
  
  
    },[])*/


    return (
        <>
   {/* <div>
            {heros.map((hero)=>(
            <li key = {hero.id}>  {<img src={hero.imageSrc}/>} {hero.title} </li>
            ))}
            </div>*/}
       
       
       <div> 
            <br/><br/>
       <div className="carousel-wrapper">
      <Carousel infiniteLoop autoPlay >
        <div id="heroImage">
          <img src={hero1}  alt="movie1"/>
        </div>
        <div id= "heroImage">
          <img src={hero2}  alt="movie2"/>
        </div>
        <div id= "heroImage"> 
          <img src={hero3}  alt="movie3"/>
        </div>
        <div id= "heroImage">
          <img src={hero4}  alt="movie4"/>
        </div>
        <div id= "heroImage">
          <img src={hero5}  alt="movie5"/>
        </div>
        <div id= "heroImage">
          <img src={hero6}  alt="movie6"/>
        </div>
        <div id= "heroImage">
          <img src={hero7}  alt="movie7"/>
        </div>
      </Carousel>
    </div>

        </div>
        </>
    )
}

export default Hero
