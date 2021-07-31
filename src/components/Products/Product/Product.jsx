import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyle from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyle();
  const { id, name, media, price, description } = product;
  // console.log(product);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={media.source} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h6' gutterBottom>
            {name}
          </Typography>
          <Typography variant='h6'>{price.formatted_with_symbol}</Typography>
        </div>
        <Typography
          className={classes.cardDescription}
          dangerouslySetInnerHTML={{ __html: description }}
          variant='body2'
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label='Add to cart' onClick={() => onAddToCart(id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
