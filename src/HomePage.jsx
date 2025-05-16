import React from "react";
import styled, { keyframes } from "styled-components";

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
            <Header>leanq</Header>
            <Subtitle>БОБРЫ ЗОНДБЕ 2 ВОЗВРАЩЕНИЕ НА ПЛОТИНУ</Subtitle>
            <GitHubLink
                href="https://github.com/1eanq/twitchannouncer"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub репозиторий Telegram бота"
            >
                <GithubIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.083-.729.083-.729
            1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.93
            0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3
            .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81
            2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </GithubIcon>
                GitHub TwitchAnnouncer
            </GitHubLink>
        </Container>
    );
};

export default HomePage;
