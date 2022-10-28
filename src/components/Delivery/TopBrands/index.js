import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import './topBrands.css'



const topBrandsList = [
  {
    id: 1,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png?output-format=webp",
  },
  {
    id: 2,
    time: "29 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png?output-format=webp",
  },
  {
    id: 3,
    time: "32 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png?output-format=webp",
  },
  {
    id: 4,
    time: "30 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png?output-format=webp",
  },
  {
    id: 6,
    time: "38 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png?output-format=webp",
  },
  {
    id: 7,
    time: "31 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png?output-format=webp",
  },
  {
    id: 8,
    time: "30 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png?output-format=webp",
  },
  {
    id: 9,
    time: "40 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/e12f7587d0a5f589af54c88352ff8bf3_1628325081.png?output-format=webp",
  },
  {
    id: 10,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9fd44dce68f59d5a4f63e7c426c4c282_1605106153.png?output-format=webp",
  },
]


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1920 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1920, min: 900 },
    items:4
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2
  }
};
 

const TopBrands = () => {
  return (
    <div>
      <div className="container">
        <div className="top_brands ">
          <div className="collection_title">Top brands for you</div>
          <div className="brand_responsive">
          <Carousel
          responsive={responsive}
          infinite={true}
          draggable={true}
          keyBoardControl={true}
        >
              {topBrandsList.map((brand) => {
                return <div>
                  <div className="top_brands_cover">
                    <img
                      src={brand.cover}
                      alt={brand.time}
                      className="top_brands_image"
                    />
                  </div>
                </div>
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBrands