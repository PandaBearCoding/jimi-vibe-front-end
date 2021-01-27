import React from 'react';
import NavBar from './Components/NavBar.js';
import UserContainer from './Containers/UserContainer.js';
import ProductContainer from './Containers/ProductContainer.js';
import FavoriteContainer from './Containers/FavoriteContainer.js';
import CartContainer from './Containers/CartContainer.js';

class App extends React.Component {

  state={
    user: {}
  }

  render(){
    return(
      <div>
        <NavBar />
        <UserContainer />
        <ProductContainer />
        <FavoriteContainer />
        <CartContainer />
      </div>
    );
  }
}

export default App;
