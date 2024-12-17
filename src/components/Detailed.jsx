import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import CommentSection from './CommentSection'
const DetailContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const MessageList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CommentsContainer = styled.div`
  margin-top: 1rem;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    background-color: #f9f9f9;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 0.9rem;
  }
`;

const Message = styled(motion.div)`
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const AddComment = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #6200ea;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #3700b3;
    }
  }
`;


const Detailed = ({ comments, onAddComment }) => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [messages, setMessages] = useState([]);
  const news = [
    {
      id: 1,
      title: "Осенний Бал",
      description:
        "something",
      
    },
    {
      id: 2,
      title: "День учителя",
      description:
        "something",
      
    },
    {
      id: 3,
      title: "Хеллоуин",
      description:
        "something.",
      
    },
    {
      id: 4,
      title: "День учителя",
      description:
        "something",
      
    },
    {
      id: 5,
      title: "Новый год",
      description:
        "ожидайте",
      
    },
    
  ];

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || {};
    setMessages(savedComments);
  }, []);

  // Сохранить комментарии в localStorage, когда они обновляются
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(messages));
  }, [messages]);

  const item = news.find((n) => n.id === Number(id));

  if (!item) return <p>Новость не найдена</p>;

  // Функция для добавления комментария к новости по ID
  const addComment = (comment) => {
    const updatedMessages = { ...messages };

    if (!updatedMessages[id]) {
      updatedMessages[id] = [];
    }

    updatedMessages[id].push(comment);
    setMessages(updatedMessages);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment(newComment); // Добавить комментарий по ID новости
      setNewComment("");
    }
  };

  return (
    <DetailContainer>
      <h2>{item.title}</h2>
      <p>{item.description}</p>

      <MessageList>
        <Message
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >

          <CommentSection
            comments={messages[id] || []} // Получаем комментарии по ID новости
            onAddComment={addComment}
          />
        </Message>
      </MessageList>
    </DetailContainer>
  );
};

export default Detailed;
