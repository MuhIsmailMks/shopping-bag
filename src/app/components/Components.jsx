import React,{useState,useEffect} from 'react'
import Image from "next/image"; 
import layout,{productCardStyles} from '../styles';

// header
export const MenuButton = ({click}) => { 
  return(
      <button className='text-yellow-400 relative max-mobile:hidden  mobile:ml-[3vw]'   onClick={click}> 
          <svg className='w-[30px] h-auto x-phone:w-[25px]' viewBox="0 0 55 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="13.75" width="41.25" height="5" fill="#439CEF"/>
              <rect x="21.0833" y="28" width="33.9167" height="5" fill="#439CEF"/>
              <rect y="14" width="55" height="5" fill="#439CEF"/>
          </svg> 
      </button>
  )
}

// rating product
const RatingStar = () => {
    return(
       <>
        <Image
        alt="star icon"
        src='./icons/star.svg'  
        width={10}
        height={10}
        className={`${productCardStyles.ratingSizeStar}   object-contain`}
        priority
       />  
       </>

    )
}

const RatingHalfStar = () => {
  return(
     <>
      <Image
      alt="star icon"
      src='./icons/half-star.svg'  
      width={10}
      height={10}  
      className={`${productCardStyles.ratingSizeStar}   object-contain`}
      priority
    />  
     </>

  )
}

const EmptyStar = () => {
    return(
       <>
        <Image
        alt="star icon"
        src='./icons/empty-star.svg'  
        width={10}
        height={10}  
        className={`${productCardStyles.ratingSizeStar}   object-contain`}
        priority
      />  
       </> 
    )
}

export const RatingProduct = ({ratingVal}) => { 
  const emptyVal = 5;  

    // for rating star 
  const starArray = Array.from({length : Math.floor(ratingVal)}, (_, index) => (
    <RatingStar key={index}/>
  ))

  // for half rating star 
  if (ratingVal % 1 !== 0) {
    starArray.push(<RatingHalfStar key="half-star" />);
  }

  // for backgroung star
  const bgStar = Array.from({length : Math.floor(emptyVal)}, (_, index) => (
    <EmptyStar key={index}/>
  ))
 

  return (
    <div className={`stars-container ${layout.flexCenter} relative w-[100px] mobile:w-[90px] phone:w-[50px]`}>  
      <div className={`star-rating relative w-[100%] z-[2] ${layout.flexStart} gap-[5px] phone:gap-[2px]`}>
         {starArray} 
      </div>
      <div className={`empty-star absolute  w-[100%] ${layout.flexStart} gap-[5px] phone:gap-[2px]`}>
        {bgStar}
      </div>
    </div>
  );
};

export default {
    MenuButton,
    RatingProduct, 
}