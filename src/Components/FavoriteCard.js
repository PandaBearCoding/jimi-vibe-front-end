import React from 'react';

class FavoriteCard extends React.Component {
    render(){
        let { image, description } = this.props.favorite
        return(
            <div>
                Favorite Card
                <img alt="" src={image} />
                <h1> {description} </h1>
                <button>❌</button>
            </div>
        )
    }
}





export default FavoriteCard;