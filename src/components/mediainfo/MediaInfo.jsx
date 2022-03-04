import LikeButton from '../likebutton'
import '../../App.css';

const MediaInfo = ({ media }) => {

   const hello = () => {
      return "hello"
   }

   return (
      <article className="container-media-info" data-testid="mediaInfoContainer">
         <div className="media-info-header">
            <h2 className="title" data-testid="title">
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
         <p onClick={hello} data-testid="testHello">
         </p>
      </article>
)
};

export default MediaInfo;