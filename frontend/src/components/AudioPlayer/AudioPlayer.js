import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';



function AudioPlayer() {
   const {id,trackId} = useParams();
   const [track,setTrack] = useState(null);

   useEffect(() => {
    const data = axios.get(`https://localhost:4000/api/programs/${id}/track/${trackId}`)
    .then(response => {
        setTrack(response.data);
        })
        .catch(error => {
            console.error(error);
            });

   },[id,trackId]);

    return track ? (
        <div className="audio-player">
          <h2>{track.title}</h2>
          <audio controls onScroll={track.audioUrl}>
            Your browser does not support the audio element.
          </audio>
        </div>
    ): <p>Loading...</p>;
}

export default AudioPlayer;