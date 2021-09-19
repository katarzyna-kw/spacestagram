//icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor, faRocket } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

export const Header = () => {
   return (
   <header className="App-header">
      <FontAwesomeIcon icon={ faMeteor } />
      <span>Spacestagram</span>
      <FontAwesomeIcon icon={ faRocket } />
 </header>
)};