import React from 'react'
import { useParams } from 'react-router-dom';
import '../../assets/scss/dashboard/dashboard.scss';

const GameDetails = () => {
  document.title = "Gaming Library - Détail du jeu";

  const params = useParams();

  return (
    <div className='GameDetails'>
      <div className="GameDetails__Header">
        <img src={'https://www.freetogame.com/g/'+ params.id + '/background.jpg'} alt="voila le header" />
      </div>
    </div>
  )
}

export default GameDetails;
