import '../../App.css';

const MediaTypeImage = ({ media }) => {
   return (
   <img src={media.hdurl} className="image" alt={media.explanation} />   
   )
};

export default MediaTypeImage;