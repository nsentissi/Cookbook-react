import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RecipeCard = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLike] = useState(false);

  const handleLike = () => {
    setLike(!liked);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='cardContainer' sx={{ width: 800, marginBottom: 3 }}>
      <CardHeader
        avatar={
            // <img src='../src/assets/mainDishIcon.jpg' className='icon'/>
            // <img src='../src/assets/dessertIcon.jpg' className='icon'/>
            <img src="../src/assets/cocktailIcon.jpg" className='icon'/>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={<span className='title'>{recipe.title}</span>}
        /* subheader="September 14, 2016" */
      />
      <CardMedia sx={{ height: 350}}
        component="img"
        height="150"
        image={recipe.img}
        alt={recipe.title}
      />
      <CardContent>
        <Typography sx={{ height: 100}} variant="body2" color="text.secondary">
          <span className='ingredients'>Ingredients: </span> {recipe.ingredients}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={handleLike} style={liked ? { color: 'red' } : {}} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><span className='ingredients'>Recipe:</span></Typography>
          <Typography paragraph>{recipe.recipe}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeCard;
