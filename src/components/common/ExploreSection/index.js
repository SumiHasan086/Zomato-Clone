import React from 'react'
import ExploreCard from './ExploreCard'
import './exploreSection.css'

const ExploreSection = ({restaurantList,collectionName}) => {
  return (
    <div>
      <div className="container">
        <div className="explore_section">
          <div className="collection_title">{collectionName}</div>
          <div className="explore_grid">
            {restaurantList.map((restaurant)=>{
              return <ExploreCard restaurant={restaurant}/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreSection