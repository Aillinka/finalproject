import React, { useState } from "react";
import styled from "styled-components";

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

const CommentSection = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment("");
    }
  };

  return (
    <CommentsContainer>
      <h4>Комментарии</h4>
      <CommentList>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </CommentList>
      <AddComment>
        <input
          type="text"
          placeholder="Добавить комментарий..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Добавить</button>
      </AddComment>
    </CommentsContainer>
  );
};

export default CommentSection;
