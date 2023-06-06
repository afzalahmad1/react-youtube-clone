import React, {useEffect} from "react"; 



const VideoList = ({videos, videoChosen}) => {

    useEffect(()=>{
        videoChosen(videos[0])
    },[videos])
 
    return(
        <div>
            {
                videos&& 
                videos.map((video, index) => (
                  <div key={index}
                    onClick={() => videoChosen(video)}
                  >
                        <img  style={{objectFit: "fill"}}
                           src={video.snippet.thumbnails.high.url}
                           alt = {video.snippet.title}
                        />
                  </div>
                ))
                
            }
        </div>
    )
}


export default VideoList;