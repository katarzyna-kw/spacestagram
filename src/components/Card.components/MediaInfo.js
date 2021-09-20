import { LikeButton } from './LikeButton'
import '../../App.css';

export const MediaInfo = ({ media }) => {
   return (
      <div className="container-img-info">
      <div className="img-info-header">
         <p className="title">
            {media.title}
         </p>
         <LikeButton />
      </div>
      <p className="date">
         {media.date}
      </p>
      <p className="caption">
         {media.explanation}
      </p>
   </div>
)
};