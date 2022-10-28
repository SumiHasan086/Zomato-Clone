import React from 'react'
import './exploreCard.css'
import { BsFillStarFill } from 'react-icons/bs'

const ExploreCard = ({ restaurant }) => {

  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine?.map((item) => item.name).slice(0, 3)
  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;


  return (
    <div>
      <div className="explore_card">
        <div className="explore_card_cover">
          <img src={coverImg} className="explore_card_image" alt={name} />
          <div className="delivery_time">{deliveryTime}</div>
          {proOff && <div className="pro_off">{proOff}</div>}
          {goldOff && <div className="gold_off absolute_center">{goldOff}</div>}
          {discount && <div className="discount">{discount}</div>}
        </div>
        <div className="res_row">
          <div className="res_name">{name}</div>
          {rating &&
            <div className="res_rating absolute_center">
              {rating}
              <BsFillStarFill size={13} />
            </div>}
        </div>
        <div className="res_row">
          {cuisines.length &&(
            <div className="res_cuisine">
              {cuisines.map((item, i) => {
                return (
                  <span className="res_cuisine_tag">
                    {item}
                    {i !== cuisines.length - 1 && ", "}
                  </span>
                );
              })}
            </div>
            )}
            {approxPrice && <div className="res_price">{approxPrice}</div>}
        </div>

        {bottomContainers.length >0 &&
          <div>
            <div className="card_seperator"></div>
            <div className="explore_bottom">
              <img
               src={bottomContainers[0]?.image?.url} 
               style={{ height : '18px'}}
               alt={bottomContainers[0]?.text}
               />
               <div className="res_bottom_text">{bottomContainers[0]?.text}</div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ExploreCard