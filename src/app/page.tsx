"use client";

import React, { use, useEffect, useState } from "react"; 

import Image from "next/image";
import styles from "./page.css";

import layout, { dimension } from "./styles";


import Navigation from "./components/Navigation";
import type { RootState } from "./GlobalRedux/store";

import { useSelector,useDispatch } from "react-redux"; 
import ShoppingBag from "./components/ShoppingBag";
import dataProducts from './data/products.json'
import Product from "./components/Product"; 
 
export default function Home() { 

  const count = useSelector((state:RootState) => state.counter.value)
  const dispatch = useDispatch();

  return (   
 
      <main className={styles.main}>
          {/* navigation */} 
        
          <Navigation/>  
          <ShoppingBag/>
         

          {/* our products */}
          <div className="our-products  my-[3rem] mx-[auto]">
            <div
              className={`products-title ${layout.flexCenter} ${dimension.Wfull_hAuto} relative`}
            >
              <h2
                className={`relative font-[700] s-desktop:text-[2.5rem] tablet:text-[1.8rem] phone:text-[1.6rem] leading-[1] `}
              >
                Our Products
              </h2>
            </div>

            <div
              className={`products-container mt-[4rem] mx-[auto] max-w-[1500px] ${layout.flexCenter}   content-start  flex-wrap ${dimension.Wfull_hAuto} s-desktop:px-[2rem] tablet:px-[2.5rem] phone:px-[1.5rem] gap-[1.5rem]`}
            > 
              {dataProducts.slice(0,10).map((item,id ) => ( 
                        <Product {...item}  key={id}/>  
                ))}   
            </div>
          </div>  
 

  
         
  

      
      </main>     
  
  );
}
