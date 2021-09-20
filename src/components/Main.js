//icon imports
import { Dates } from './Dates'
import { Card } from './Card'
import { LoadingAnimation } from './LoadingAnimation'
import '../App.css';

export const Main = ({nasaEndpoint, nasaApiKey, loading, onSelect, media, loadingMedia}) => {
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