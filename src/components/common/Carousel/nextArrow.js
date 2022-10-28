import React from 'react'

const NextArrow = (props) => {
const {className,style, onClick} = props;

  return (
    <div>
        <div 
           className={className}
           style={{
            ...style,
            background:'white',
            borderRadius:'50%',
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            padding:'4px'
        }} 
           onClick={onClick}
        >
            PrevArrow
        </div>
    </div>
  )
}

export default NextArrow