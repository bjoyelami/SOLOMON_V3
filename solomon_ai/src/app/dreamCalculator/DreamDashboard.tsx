import React,  {useEffect, useState, FC} from 'react'
import Image from 'next/image';


interface Dashboard  {
    greeting: string,
    
}


export const DreamDashboard:  FC<Dashboard> = ({
    greeting

}) => 
    { 

        return(

            <>
           

        <div className="chatDashBoardContainer ">
          <div className=" pb-[2rem] relative">
            <h2>{greeting}</h2>
            <h2>welcome to dream interpeter</h2>
            <p id="greyText"> synopsis of the dream world </p>
          </div>

          <div className="color-div text-[#4C35DE]">
            <div className="flex flex-row gap-[5px] items-start">
              <svg
                width="32"
                height="32"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4C35DE"
                  d="M18.695 12.33l-1.932-.516A7.014 7.014 0 0017 10c0-.63-.083-1.237-.237-1.814l1.932-.516c.2.743.305 1.524.305 2.33a9.01 9.01 0 01-.305 2.33zm-.9-6.83l-1.73 1a7.044 7.044 0 00-2.566-2.564l1.002-1.732A9.044 9.044 0 0117.796 5.5zM12.33 1.304l-.516 1.932A7.012 7.012 0 0010 3c-.63 0-1.237.083-1.814.237L7.67 1.305A9.012 9.012 0 0110 1c.806 0 1.587.106 2.33.305zm-6.83.9l1 1.73a7.044 7.044 0 00-2.564 2.566L2.204 5.499A9.044 9.044 0 015.5 2.204zM1.304 7.67A9.012 9.012 0 001 10c0 .806.106 1.587.305 2.33l1.932-.516A7.012 7.012 0 013 10c0-.63.083-1.237.237-1.814L1.305 7.67zm.9 6.83l1.73-1a7.044 7.044 0 002.566 2.564l-1.002 1.732A9.044 9.044 0 012.204 14.5zm5.465 4.195l.516-1.932A7.014 7.014 0 0010 17c.63 0 1.238-.083 1.814-.237l.516 1.932A9.01 9.01 0 0110 19a9.011 9.011 0 01-2.33-.305zm6.83-.9l-1-1.73a7.043 7.043 0 002.564-2.566l1.732 1.002a9.043 9.043 0 01-3.295 3.295z"
                ></path>
              </svg>

              <div className="flex flex-col gap-[5px]">
                <div className =" flex flex-row gap-[10px] items-center ">
                <h3>Dive into the meaning of dreams </h3>
                  <span className = "text-[10px] text-[#7c7c7ca5]">**note somtimes images do not save**</span>
                </div>
                Discover some insights on the ether realm of where the dream
                resides. What is your subconsicous mind symbolizing? Dream Chat Doesn't delete to keep track of all entries
              </div>

              <p></p>
            </div>
          </div>

       
        </div>
            </>
        )


    }