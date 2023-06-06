import React, {useState, useEffect} from "react";
import youtube from "../apis/youtube";


const SearchBar = ({addVideos}) => {
    const [searchTerm,setSearchTerm] = useState("React Tutorials")
     
    useEffect(()=>{
        getYoutubeVideos() 
    },[])

    function getYoutubeVideos(){

        youtube.get("/search",{
          params:{
            q: searchTerm,
            type: "video"
          }
        })
        .then((response) => addVideos(response.data.items))
        .catch((error) => console.log(error))
  
      }

    return(
        <div>
              <input type="text" placeholder="Search" 
              onChange={e => setSearchTerm(e.target.value)}
              value = {searchTerm}
              />
             <button onClick={getYoutubeVideos}> Search </button>
        </div>
    )
    
}



export default SearchBar;