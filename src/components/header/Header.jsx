//icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor, faRocket } from '@fortawesome/free-solid-svg-icons'
import '../../App.css';

const Header = () => {
   return (
      <header className="App-header" data-testid="header">
         <FontAwesomeIcon icon={ faMeteor } />
         <h1>Spacestagram</h1>
         <FontAwesomeIcon icon={ faRocket } />
   </header>
)};

export default Header;