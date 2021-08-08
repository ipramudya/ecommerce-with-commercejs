import { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { commerce } from './lib/commerce';
import { DataContext } from './context/context';
import { Cart, Checkout, Navbar, Products } from './components';

const App = () => {
  const { cart } = useContext(DataContext);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Products />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/checkout'>
            <Checkout cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
