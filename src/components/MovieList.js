import React,{useEffect,useContext,useState} from 'react';
import moviezzContext from '../context/moviezzContext';
import Description from './Description';

const MovieList = () => {
    const { movielists,setMovielists} = useContext(moviezzContext);
    const [state, setstate] = useState({data:""})
  
    const changeState = () => {  
        setstate({data:`fsfs`}); 
       }; 

    useEffect(()=>{

        //Async operation GET
        fetch ("http://localhost:5000/movielist")
        .then((res)=>{
  
          return res.json()
        })
        .then(data=>{    
            setMovielists(data.body);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
  
  
    },[])
    return (
        <div>
        <br/>
        <br/>
        <div className = "grid-container">
             {movielists.map((movielist) => (
              
            <div className="grid-item" key={movielist.id}>
                <a href="/desc"onClick={changeState} > 
                {<img src = {movielist.poster} alt="imageSrc" />}
							</a> </div>
      
             
             ))}
        </div>
      
        <div>
       
         
         <Description data={state.data}/>             
                  
        </div>
        </div>
    )
}

export default MovieList
