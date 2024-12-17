import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CommentSection from "./CommentSection";
import Detailed from "./Detailed";

const BoardContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #6200ea;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  textarea {
    width: 100%;
    height: 120px;
    padding: 1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    resize: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: #6200ea;
      outline: none;
    }
  }

  button {
    align-self: flex-start;
    padding: 0.5rem 1.5rem;
    background-color: #6200ea;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #3700b3;
    }
  }
`;

const MessageList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Message = styled(motion.div)`
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const addMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, comments: [] }]);
      setNewMessage("");
    }
  };

  const addComment = (index, comment) => {
    const updatedMessages = [...messages];
    updatedMessages[index].comments.push(comment);
    setMessages(updatedMessages);
  };

  return (
    <BoardContainer>
      <Title>Анонимные сообщения</Title>
      <InputSection>
        <textarea
          placeholder="Напишите сообщение..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
        <button onClick={addMessage}>Добавить</button>
      </InputSection>
      <MessageList>
        {messages.map((message, index) => (
          <Message
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p>{message.text}</p>
            <CommentSection
              comments={message.comments}
              onAddComment={(comment) => addComment(index, comment)}
            />
            <div style={{display: "none"}}>

            
            <Detailed 
            comments={message.comments}
            onAddComment={(comment) => addComment(index, comment)}
            />
</div>
          </Message>
        ))}
      </MessageList>
    </BoardContainer>
  );
};

export default MessageBoard;
