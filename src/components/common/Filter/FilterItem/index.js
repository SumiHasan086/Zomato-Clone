import React from 'react'
import './filterItem.css'

const FilterItem = ({filter}) => {
  return (
    <div className="filter_item">
       {filter.icon && filter.icon} 
       <div className="filter_title">
          {filter.title}
       </div>
    </div>
  )
}

export default FilterItem