import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #6200ea;
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  margin-top: 2rem;
  font-size: 0.9rem;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: #ffb300;
    }
  }
`;

const CopyRight = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyRight>© {new Date().getFullYear()} AnonMessages. Все права защищены.</CopyRight>
        <SocialLinks>
          <a href="https://wa.me/+996702510169" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="https://www.instagram.com/p/C_qjDoYCltdpUjuRrH7pDP_nY7JMUdknS7t4NU0/?igsh=MWdhaGQyMGFkbG5kbg==" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
