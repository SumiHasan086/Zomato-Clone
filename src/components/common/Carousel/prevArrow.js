import React from 'react'

const PrevArrow = (props) => {
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
            NextArrow
        </div>
    </div>
  )
}

export default PrevArrow