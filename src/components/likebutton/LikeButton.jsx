import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const LikeButton = () => {
   return (
      <FormControlLabel data-testid="button"
         control={<Checkbox icon={<FavoriteBorderIcon />} 
         checkedIcon={<FavoriteIcon />}
         name="liked" />}
      />
   )
};

export default LikeButton