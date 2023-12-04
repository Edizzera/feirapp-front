import React ,{ useState } from 'react';
import './FairCard.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; 
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'; 
const FairCard = ({ fair }) => {
    
    const { street, district, number } = fair.address;
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
      };

  
    return (
      <div className="fair-card">
        <h3>{fair.name}</h3>
        <button
        className="favorite-button"
        onClick={toggleFavorite}
        aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} />
      </button>
        <p>{fair.weekDay}</p>
        <p>Categoria: {fair.category}</p>
        <p>Endereço: {street}, {number}, {district}</p>
        <p>Horário: {fair.start} às {fair.end}</p>
      </div>
    );
  };

export default FairCard;