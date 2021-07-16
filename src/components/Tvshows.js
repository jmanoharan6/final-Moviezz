import React,{useEffect,useContext} from 'react';

import moviezzContext from '../context/moviezzContext';
import { CardGroup, Card, Button } from 'react-bootstrap';


   
const Tvshows = () => {
    const {tvshows, setTvShows} = useContext(moviezzContext);
    useEffect(()=>{

        //Async operation GET
        fetch ("http://localhost:3000/tvshow")
        .then((res)=>{
  
          return res.json()
        })
        .then(json=>{    
            setTvShows(json);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
  
  
    },[])
    return (
        <div>
            <br></br>
            <br></br>
            <h2 className="text-left">Featured TV shows</h2>
            <br></br>
            <br></br>
            <CardGroup>
                {tvshows.map((tvshow) => (
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={tvshow.url} alt="tv1"/>
                    </div>
                </Card>
                ))}
        
            </CardGroup>

        </div>
    )
}

export default Tvshows
