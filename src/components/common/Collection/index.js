import React from 'react'
import './collection.css'
import { AiFillCaretRight } from 'react-icons/ai'
import Carousel from 'react-multi-carousel';



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1920 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1920, min: 1100 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 900, min: 750 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1
    }
  };
  

const Collection = ({ collectionList }) => {
    return (
        <div className="collection_wrapper">
            <div className="container collection">
                <div className="collection_title">Collections</div>
                <div className="collection_subtitle_row">
                    <div className="collection_subtitle_text">
                        Explore curated lists of top restaurants, cafes, pubs and bars in Lucknow, based on trends
                    </div>
                    <div className="collection_location">
                        <div>All collection in Lucknow</div>
                        <AiFillCaretRight size={20} className="collection_location_icon absolute_center" />
                    </div>
                </div>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    infinite={true}
                    draggable={true}
                    keyBoardControl={true}
                >

                    {collectionList.map((collection) => {
                        return (
                            <div>
                                <div className="collection_cover">
                                    <img
                                        className="collection_image"
                                        src={collection.cover}
                                        alt={collection.title}
                                    />
                                    <div className="gradient_bg"></div>
                                    <div className="collection_card_title">{collection.title}</div>
                                    <div className="collection_card_subtitle">
                                        <div>{collection.places}</div>
                                        <AiFillCaretRight size={20} />
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default Collection