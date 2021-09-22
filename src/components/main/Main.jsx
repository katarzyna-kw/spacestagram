//icon imports
import Dates from '../dates'
import Card from '../card'
import LoadingAnimation from '../loadinganimation'
import '../../App.css';

const Main = ({nasaEndpoint, nasaApiKey, loading, onSelect, media, loadingMedia}) => {
   return (
      <main className="container-body">
        <Dates 
          nasaEndpoint={nasaEndpoint} nasaApiKey={nasaApiKey} 
          onSelect={onSelect}
          loadingMedia={loadingMedia}
        />
        { (!loading)
          ? <Card media={media} /> 
          : <LoadingAnimation /> 
        }
      </main>
)};

export default Main;