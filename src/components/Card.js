import React, { useState, useEffect } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HourglassIcon from '@material-ui/icons/HourglassEmpty'
import '../App.css';


export const Card = ({ media }) => {

   const [ mediaType, setMediaType ] = useState();

   // reset media type when selected media changes
   useEffect(()=> {
      setMediaType(media.media_type);
   }, [media.media_type]);

   return (
<>
   { (mediaType!==undefined) 
      ? <div className="container-content">
         <div className="container-img">
            { (mediaType==="video") 
            ? <div className="video-wrapper">
               <iframe
                  width="100%"
                  height="100%"
                  src={media.url}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
               >
               </iframe>
            </div> 
            : <img src={media.hdurl} className="image" alt={media.explanation} />
            }
         </div>
         <div className="container-img-info">
            <div className="img-info-header">
               <p className="title">
                  {media.title}
               </p>
               <FormControlLabel
                  control={<Checkbox icon={<FavoriteBorderIcon />} 
                  checkedIcon={<FavoriteIcon />}
                  name="liked" />}
               />
               <p className="count">1</p>
            </div>
            <p className="date">
               {media.date}
            </p>
            <p className="caption">
               {media.explanation}
            </p>
         </div>
      </div>
   : <div className="container-content">
   <div className='app-loading'><HourglassIcon/> Media is loading...</div>   
   </div>
   }
</>
)};