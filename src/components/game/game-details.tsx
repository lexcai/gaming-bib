import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../assets/scss/dashboard/dashboard.scss";
import { Chat } from "../../assets/utils/models/Chat";
import Game from "../../assets/utils/models/Game";
import { GameContext } from "../../context/gameContext";
import { UserContext } from "../../context/userContext";

const GameDetails = () => {
  document.title = "Gaming Library - Détail du jeu";

  const navigate = useNavigate();
  const params = useParams();
  const [currentGame, setCurrentGame] = useState<Game>(new Game());
  const { currentUser } = useContext(UserContext);
  const { fetchOneDataById, fetchChats, createChatHandler, chats } =
    useContext(GameContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [openClass, setOpenClass] = useState<number>(-400);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOneDataById(params.id as string);
      if (data) {
        setCurrentGame(data);
      }
    };
    fetchData();

    const fetchDataChats = async () => {
      await fetchChats(currentGame);
    };
    fetchDataChats();
  }, [params.id, currentGame.id]);

  const toggleMenu = (event: any) => {
    event.stopPropagation(); // empêche la propagation de l'événement
    setIsOpen((prevIsOpen) => {
      const newIsOpen = !prevIsOpen;
      setOpenClass(newIsOpen ? 0 : -400);
      return newIsOpen;
    });
    scrollToChatBottom();
  };

  const createChat = async () => {
    let data: Chat = new Chat();
    data.IDUSER = currentUser.uid;
    data.IdGame = currentGame.id;
    data.Game = currentGame;
    data.Users = currentUser;
    data.message = message;
    setMessage("");

    await createChatHandler(data);
    await fetchChats(currentGame);
    scrollToChatBottom();
  };
  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  const scrollToChatBottom = () => {};

  return (
    <div className="GameDetails">
      <div className="GameDetails__Chat" style={{ right: openClass + "px" }}>
        {isOpen ? (
          <i
            className="bi bi-arrow-bar-right"
            onClick={(event) => toggleMenu(event)}
          ></i>
        ) : (
          <i
            className="bi bi-arrow-bar-left"
            onClick={(event) => toggleMenu(event)}
          ></i>
        )}
        <div className={`GameDetails__Chat__Main`}>
          <div className="GameDetails__Chat__Main__TextArea">
            {chats.map((chat: Chat) => (
              <div
                key={chat.id}
                className="GameDetails__Chat__Main__TextArea__Message"
              >
                <h2>
                  {chat.Users?.username
                    ? chat.Users?.username
                    : chat.Users?.Mail}
                </h2>
                <p>{chat.message}</p>
              </div>
            ))}
            <div id="bottomTextArea"></div>
          </div>
          <div className="GameDetails__Chat__Main__Search">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Discutez avec vos amis..."
            />
            <i
              className="bi bi-arrow-right-circle-fill"
              onClick={createChat}
            ></i>
          </div>
        </div>
      </div>
      <div className="GameDetails__Header">
        <img
          src={"https://www.freetogame.com/g/" + params.id + "/background.jpg"}
          alt="voila le header"
        />
        <div className={"GameDetails__Header__Main"}>
          <h1>{currentGame.title}</h1>
          <button type="button" className="btn btn-primary">
            <Link to={currentGame.game_url} target="_blank">
              <span>Découvrez le jeu</span>
            </Link>
          </button>
        </div>
      </div>
      <div className="GameDetails__Description">
        <h2>Description</h2>
        <p>{currentGame.short_description}</p>
        <h2>Discussion</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={(event) => toggleMenu(event)}
        >
          <span>Ouvrir le chat</span>
        </button>
      </div>
      <div className="GameDetails__Others">
        <h2>Informations Complémentaires</h2>
        <p>
          <span>Plateforme :</span> {currentGame.platform}
        </p>
        <p>
          <span>Genre :</span> {currentGame.genre}
        </p>
        <p>
          <span>Développeur :</span> {currentGame.developer}
        </p>
        <p>
          <span>Éditeur :</span> {currentGame.publisher}
        </p>
        <p>
          <span>Date de sortie :</span> Le{" "}
          {new Date(currentGame.release_date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <Link to={currentGame.freetogame_profile_url} target="_blank">
          <p>En savoir plus</p>
        </Link>
      </div>
    </div>
  );
};

export default GameDetails;
