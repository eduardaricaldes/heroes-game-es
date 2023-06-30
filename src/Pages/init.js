import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../assets/logoinit.png";

export default function InitPage() {
  // const history = useHistory();

  // const handleStartGame = () => {
  //   // Aqui você pode adicionar a lógica para começar o jogo a partir do banco de dados

  //   // Exemplo: Chamada à API para iniciar o jogo
  //   // axios.post("/api/start-game").then((response) => {
  //   //   // Lógica para lidar com a resposta da API
  //   //   history.push("/game"); // Redireciona para a rota do jogo
  //   // }).catch((error) => {
  //   //   // Lógica para lidar com erros
  // onClick = { handleStartGame };
  //   // });

  //   // Exemplo: Iniciar o jogo localmente sem chamar uma API
  //   history.push("/game"); // Redireciona para a rota do jogo
  // };

  return (
    <InitContainer>
      <ContainerContent>
        <div className="buttons">
          <Link to="/home-game">
            <button>Iniciar</button>
          </Link>
        </div>
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

  button {
    border-radius: 50px;
    background-color: #fcd14e;
    margin-top: 340px;
    width: 250px;
    height: 100px;
    color: #000;
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    position: relative;
    overflow: hidden;
  }

  button::before {
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

  button::after {
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

  @media (max-width: 768px) {
    button {
      width: 200px;
      height: 80px;
      margin-top: 240px;
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    button {
      width: 150px;
      height: 60px;
      margin-top: 160px;
      font-size: 14px;
    }
  }
`;
