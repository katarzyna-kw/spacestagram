import React, { useState, useEffect } from 'react'
import { LoadingAnimation } from './LoadingAnimation'
import { MediaTypeVideo } from './Card.components/MediaTypeVideo'
import { MediaTypeImage } from './Card.components/MediaTypeImage'
import { MediaInfo } from './Card.components/MediaInfo'
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
      ? <section className="container-content">
         <div className="container-media">
            { (mediaType==="video") 
            ? <MediaTypeVideo media={media} />
            : <MediaTypeImage media={media} />
            }
         </div>
         <MediaInfo media={media} />
      </section>
   : <section className="container-content">
      <LoadingAnimation />
   </section>
   }
</>
)};