import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import { DataContext } from '../../context/context';
import useStyles from './styles';
import logo from '../../assets/shop.png';

const Navbar = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { cart } = useContext(DataContext);

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            className={classes.title}
            color='inherit'
          >
            <img
              src={logo}
              alt='Commerce.js'
              height='50px'
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          {pathname !== '/cart' && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to='/cart'
                aria-label='Show cart items'
                color='inherit'
              >
                <Badge badgeContent={cart.total_items} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
