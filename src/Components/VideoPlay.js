



const VideoPlay = ({video}) => {
     


    return(
        <div>
              { 
              video==null ? <h1>Loading .... </h1> : (
                <iframe width="85%" height="515" src={`https://www.youtube.com/embed/${video.id.videoId}`} ></iframe>
              )

              }
        </div>
    )
}

export default VideoPlay;