import styles from "../../../styles/chat.module.css";
import { useEffect, useRef, useState } from "react";
import React, { FC, RefObject } from "react";
import ChatMessage from "@/app/components/Chatmessage";
import LoadingComponent from "@/app/components/helper/Loading";
import { debug } from "console";

interface ChatMessage {
  question?: string;
  response?: string;

}

interface ResponseObject { 
  question: string;
  response: string;
  imageUrl?: string;
  id: string;
}


interface ChatMessageProps {
  responses: ResponseObject[];
}




export const ChatMessagesContainer: FC<ChatMessageProps> = ({ responses }) => {
  const [splitUserName, setSplitUserName] = useState<string>("");
  //Get the split user name
  useEffect(() => {
    const storedSplitUserName = sessionStorage.getItem("splitUserName");

    setSplitUserName(storedSplitUserName || "");
  }, []);



  const lastMessageId = responses.length > 0 ? responses[responses.length - 1].id : null;

  
useEffect(() => { 
    

  // debugger
},[responses])

  //We want to get the latest storage when we swith the platform

  return (
    <>
      <div className={styles.chat_container}>
        <div className={styles.chat_box}>
          <div className={styles.chat_flex}>
            <div className={styles.chat_Messages}>
              {responses.map((response, index) => (
                <div className={styles.response_Flex} key={index}>
                  {/* <div className="mainIcon flex items-center justify-center iconBorder">
                {splitUserName}
              </div> */}
                  <p
                    data-split-username={splitUserName}
                    className={`${styles.bot_Messages} ${styles.new_bot_message}`}
                  >
                    {response.question}
                  </p>
                  {response.response  ? (
                  <ChatMessage 
                  response={response as any}
                  shouldAnimate={response.id === lastMessageId}

                  
                  />
                  ) : (
                    <LoadingComponent />
                    // isFetchLoading && <LoadingComponent /> // Render LoadingComponent while waiting for response
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
