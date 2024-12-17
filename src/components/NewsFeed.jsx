import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const FeedContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const NewsItem = styled(motion.div)`
  background: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  h3 {
    margin: 0 0 0.5rem 0;
  }
`;

const NewsFeed = () => {
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
    

  return (
    <FeedContainer>
      <h2>Новостной канал</h2>
      {news.map((item) => (
        <Link to={`/news/${item.id}`} style={{textDecoration: "none" , color: "black"}}>
        <NewsItem key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </NewsItem>
        </Link> 
      ))}
    </FeedContainer>
  );
};
























export default NewsFeed;