import { Grid } from '@material-ui/core';
import { useContext } from 'react';
import { DataContext } from '../../context/context';

import Product from './Product/Product';
import useStyles from './styles';

const Products = () => {
  const classes = useStyles();
  const { products } = useContext(DataContext);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
