import '../../App.css';

export const MediaTypeVideo = ({ media }) => {
   return (
      <div className="video-wrapper">
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
   )
};