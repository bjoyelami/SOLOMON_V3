import styles from "../../../../styles/chat.module.css";
import { useEffect, useRef, useState } from "react";
import React, { FC, RefObject } from "react";
import ChatMessage from "@/app/components/Chatmessage";
import LoadingComponent from "@/app/components/helper/Loading";

interface ChatMessage {
  question: string;
  response: string;
}

interface ChatMessageProps {
  responses: ChatMessage[];
  firstMessage?: number;
}

export const SignUpMessageContainer: FC<ChatMessageProps> = ({
  responses,
  firstMessage,
}) => {
  const [splitUserName, setSplitUserName] = useState<string>("");
  //Get the split user name
  useEffect(() => {
    const storedSplitUserName = sessionStorage.getItem("splitUserName");

    setSplitUserName(storedSplitUserName || "");
  }, []);

  useEffect(() => {
    console.log(
      "logging the first message in hte isignUPmessage useff",
      firstMessage,
      responses
    );

    console.log(
      "Also logging the state of reponses in the SIgnUPMessage container",
      responses,
      firstMessage
    );
  }, [responses]);

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
                  {response.question && (
                    <p
                      data-split-username={splitUserName}
                      className={`${styles.bot_Messages} ${styles.new_bot_message}`}
                    >
                      {response.question}
                    </p>
                  )}

                  {response.response ?(
                      <ChatMessage message={response.response} />
                  ) : (
                    <LoadingComponent />
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
