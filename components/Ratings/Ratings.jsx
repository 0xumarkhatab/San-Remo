import StarRatings from './react-star-ratings';
 
import React from 'react'

function Ratings() {
    return (
        <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={()=>{return 3}}
          numberOfStars={6}
          name='rating'
        />
        
    )
}

export default Ratings

 