import { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

import logo from "../assets/fundo.png";

export default function HomeGame() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Quem escreveu Levítico?",
      answers: [
        { id: 1, text: "Paulo", points: 0 },
        { id: 2, text: "João", points: 0 },
        { id: 3, text: "Moisés", points: 10 },
      ],
    },
    // Adicione mais perguntas aqui
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (answer) => {
    const updatedQuestions = [...questions];
    const currentQuestion = updatedQuestions[currentQuestionIndex];

    // Adicione a pontuação da resposta selecionada ao score
    setScore(score + answer.points);

    // Verifique se há mais perguntas disponíveis
    if (currentQuestionIndex < updatedQuestions.length - 1) {
      // Avance para a próxima pergunta
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Não há mais perguntas, faça o que for necessário aqui
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <InitContainer>
      <Question>
        <h1>Questão {currentQuestion.id}</h1>
        <p>{currentQuestion.question}</p>
      </Question>
      <ContainerContent>
        <ButtonContainer>
          {currentQuestion.answers.map((answer) => (
            <Button key={answer.id} onClick={() => handleAnswerClick(answer)}>
              {answer.text}
            </Button>
          ))}
        </ButtonContainer>
      </ContainerContent>
    </InitContainer>
  );
}

const InitContainer = styled.div`
  height: 100vh;
  font-family: "Press Start 2P", cursive;
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  font-size: 20px;
`;

const ContainerContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

const Question = styled.div`
  background-color: #000;
  padding: 20px;
  border: 4px solid #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  flex: 0 0 auto;
  margin: 10px;
  border-radius: 50px;
  background-color: #fcd14e;
  width: 200px;
  height: 100px;
  color: #000;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  position: relative;
  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.5;
    filter: blur(20px);
    transform: scale(2);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background-color: #fff;
    opacity: 0.5;
    filter: blur(40px);
    animation: neon-glow 1.5s ease-in-out infinite;
  }

  @keyframes neon-glow {
    0% {
      opacity: 0;
      filter: blur(50px);
    }
    50% {
      opacity: 1;
      filter: blur(50px);
    }
    100% {
      opacity: 0;
      filter: blur(40px);
    }
  }
`;
