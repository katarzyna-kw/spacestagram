import React, { useState, useEffect } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export const Card = ({ data, onMediaSelect }) => {
   const [ selectedMedia, setSelectedMedia ] = useState(data.media_type);
   // const [ image, setImage ] = useState()
   // const [ title, setTitle ] = useState('')
   // const [ date, setDate ] = useState('')

   //reset media type when media changes
   useEffect(()=> {
      setSelectedMedia(data.media_type);
   }, [data.media_type])

   return (
<>
<div className="container-content">
   <div className="container-img">
      { (selectedMedia==="video") ? 
      <div className="video-wrapper">
      <iframe
         width="100%"
         height="100%"
         src={data.url}
         title="YouTube video"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
         >
      </iframe>
   </div> : 
   <img src={data.hdurl} className="image" alt="logo" />
}
    </div>
    <div className="container-img-info">
      <div className="img-header">
         <p className="title">
          {data.title}
         </p>
         <FormControlLabel
            control={<Checkbox icon={<FavoriteBorderIcon />} 
            checkedIcon={<FavoriteIcon />}
            name="liked" />}
         />
         <p className="count">1</p>
      </div>
      <p className="date">
         {data.date}
      </p>
      <p className="caption">
         {data.explanation}
      </p>
    </div>
</div>
</>
)
}