import React from 'react'
import Filter from '../common/Filter'
import './delivery.css'
import { BsFilterLeft } from 'react-icons/bs'
import { TbArrowsDownUp } from 'react-icons/tb'
import DeliveryCollection from './DeliveryCollection'
import TopBrands from './TopBrands'
import ExploreSection from '../common/ExploreSection'
import {restaurants} from '../../Data/restaurants'

const deliveryFilters = [
  {
    id: 1,
    icon: <BsFilterLeft className="absolute_center" />,
    title: 'Filters'
  },
  {
    id: 2,
    title: 'Rating: 4.0+'
  },
  {
    id: 3,
    title: 'Safe & Hygienic'
  },
  {
    id: 4,
    title: 'Pure Veg'
  },
  {
    id: 5,
    icon: <TbArrowsDownUp className="absolute_center" />,
    title: 'Delivery Time'
  },
  {
    id: 6,
    title: 'Great Offers'
  },
]

const restaurantList=restaurants

const Delivery = () => {
  return (
    <div>
        <Filter filterList={deliveryFilters} />
        <DeliveryCollection />
        <TopBrands />
        <ExploreSection
         restaurantList={restaurantList} 
         collectionName="Delivery Restaurants in Lucknow"/>
    </div>
  )
}

export default Delivery