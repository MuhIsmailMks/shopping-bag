import React,{useState,useEffect} from 'react'
import Image from "next/image"; 
import layout,{productCardStyles} from '../styles';

 

// images
import star from 'icons/star.svg'
import bg_star from 'icons/empty-star.svg'
import halfStar from 'icons/half-star.svg' 


// rating product
const RatingStar = () => {
    return(
       <>
        <Image
        alt="star icon"
        src={star}  
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
      src={halfStar}  
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
        src={bg_star}  
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
    RatingProduct, 
}