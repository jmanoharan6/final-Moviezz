import React,{useEffect,useContext} from 'react';
import moviezzContext from '../context/moviezzContext';

const Tvlist = () => {
    const { tvlists,setTvlists} = useContext(moviezzContext);
    useEffect(()=>{

        //Async operation GET
        fetch ("http://localhost:5000/tvshowlist")
        .then((res)=>{
  
          return res.json()
        })
        .then(data=>{    
            setTvlists(data.body);
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
             {tvlists.map((tvlist) => (
            <div className="grid-item"  key={tvlist.id}>
                <a href="/movielist" target = "_blank" >
                {<img src = {tvlist.poster} alt="imageSrc"/>}
							</a> </div>
             ))}
        </div>
        </div>
    )
}

export default Tvlist
