import React from 'react';
import FavoriteCard from '../Components/FavoriteCard.js';

class FavoriteContainer extends React.Component {
    
    state = {
        favoriteApi: []
    }

    renderFavorites = () => {
        return this.state.favoriteApi.map((el) => <FavoriteCard key={el.id} favorite={el} />)
    }

    render(){
        return(
            <div>
                Favorite Container
                {this.renderFavorites()}
            </div>
        )
    }
}

export default FavoriteContainer;