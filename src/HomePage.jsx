import React from "react";
import styled, { keyframes } from "styled-components";
import GitHubPanel from "./components/GitHubPanel";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background: #f0f2f5;
  color: #222;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
  color: #0a3d62;
  animation: ${fadeInUp} 0.7s ease forwards;

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #3c6382;
  margin-bottom: 30px;
  text-transform: uppercase;
  max-width: 400px;
  animation: ${fadeInUp} 1s ease forwards;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    max-width: 90vw;
  }
`;

const GitHubLink = styled.a`
  width: 180px;
  height: 180px;
  background: #24292e;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  font-family: inherit;
  user-select: none;
  transition: background 0.3s ease, transform 0.3s ease;
  animation: ${fadeInUp} 1.3s ease forwards;

  &:hover, &:focus {
    background: #0366d6;
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 140px;
    font-size: 16px;
  }
`;

const GithubIcon = styled.svg`
  width: 72px;
  height: 72px;
  margin-bottom: 16px;
  fill: white;

  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
    margin-bottom: 12px;
  }
`;

const HomePage = () => {
    return (
        <Container>
            <GitHubPanel/>
        </Container>
    );
};

export default HomePage;
