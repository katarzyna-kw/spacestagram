import React, { useState, useEffect } from 'react'
import LoadingAnimation from '../loadinganimation'
import MediaTypeVideo from '../mediatypevideo'
import MediaTypeImage from '../mediatypeimage'
import MediaInfo from '../mediainfo'
import '../../App.css';

const Card = ({ media }) => {

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

export default Card;