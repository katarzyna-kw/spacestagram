import '../../App.css';

export const MediaTypeImage = ({ media }) => {
   return (
   <img src={media.hdurl} className="image" alt={media.explanation} />   
   )
};