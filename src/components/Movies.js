import React,{useEffect,useContext} from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';
import moviezzContext from '../context/moviezzContext';

const Movies = () => {
    const {movies,setMovies} = useContext(moviezzContext);
    useEffect(()=>{

        //Async operation GET
        fetch ("http://localhost:5000/movies")
        .then((res)=>{
  
          return res.json()
        })
        .then(data=>{    
              setMovies(data.body);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
  
  
    },[])
    return (
        <div>
      
      <br></br>
            <h2 className="text-left">Featured Movies</h2>
            <br></br>
            <br></br>
  
           
            <CardGroup>
                {movies.map((movie) => (
                <Card className="moviesTab">
                    <div id = "movieImg"  key={movie.id} ><Card.Img variant="top" src={movie.poster} alt="tv1"/>
                    </div>
                </Card>
                ))}
        
            </CardGroup>

            </div>
    )
}

export default Movies
