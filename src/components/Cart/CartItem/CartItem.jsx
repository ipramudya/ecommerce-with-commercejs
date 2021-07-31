import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant='h6'>{item.name}</Typography>
        <Typography variant='h6'>
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button type='button' size='small'>
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type='button' size='small'>
            +
          </Button>
        </div>
        <Button type='button' color='secondary' variant='contained'>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
