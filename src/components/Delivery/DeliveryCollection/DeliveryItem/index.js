import React from 'react'
import './deliveryItem.css'

const DeliveryItem = ({item}) => {
  return (
    <div>
        <div className="delivery_items_cover">
            <img 
            src={item.cover} 
            alt={item.title} 
            className="delivery_item_image"
            />
        </div>
        <div className="delivery_item_title">{item.title}</div>
    </div>
  )
}

export default DeliveryItem