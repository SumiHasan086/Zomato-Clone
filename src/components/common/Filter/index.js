import React from 'react'
import './filter.css'
import FilterItem from './FilterItem'

const Filter = ({ filterList }) => {
  return (
    <div className='container'>
        <div className="filters ">
          {filterList && filterList.map((filter) => {
            return <FilterItem filter={filter} key={filter.id} />
          })}
        </div>
    </div>
  )
}

export default Filter