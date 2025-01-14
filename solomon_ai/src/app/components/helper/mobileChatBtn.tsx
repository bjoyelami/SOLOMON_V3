import { useEffect,useRef, useState } from "react";


interface HeaderProps {
    handleMobileChatBtnClick: () => void;

  }
  

export default function MobileChatBTNComponent({
    handleMobileChatBtnClick,
    
}) { 
    return ( 

        <div className=" flex-1   cursor-pointer mobileChatContainer">
        <div
          onClick={handleMobileChatBtnClick}
          className=" mobileChatBtn flex items-center justify-start"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path>
          </svg>
        </div>
      </div>

    )

    
}
