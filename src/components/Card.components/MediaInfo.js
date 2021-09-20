import { LikeButton } from './LikeButton'
import '../../App.css';

export const MediaInfo = ({ media }) => {
   return (
      <article className="container-media-info">
         <div className="media-info-header">
            <h2 className="title">
               {media.title}
            </h2>
            <LikeButton />
         </div>
         <p className="date">
            {media.date}
         </p>
         <p className="caption">
            {media.explanation}
         </p>
      </article>
)
};