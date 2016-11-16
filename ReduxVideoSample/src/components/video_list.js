import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) =>{
    const videoItems = props.videos.map((video)=>{
        return ( 
        <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video} />
        );
    });

    return(
        //Para los estilos estamos usando bootstrap
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );

}

export default VideoList;