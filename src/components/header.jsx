import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css'; 
import logo from '/logo-oraculus.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDataContext } from '../pages/DataContext';

import horoscope from '../data/horoscope.json';




const Header = () => {
  const {currentIndex, setCurrentIndex} = useDataContext();

    const handleLeftArrowClick = () => {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1);
    };

    const handleRightArrowClick = () => {
        setCurrentIndex(currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0);
    };


  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="Logo Oraculus" />
      </NavLink>
      <nav>
        <ul>
          <li><NavLink className="active" to="/">Horoscope</NavLink></li>
          <li><NavLink className="active" to="/about">A propos</NavLink></li>
          <li><NavLink className="active" to="/contact">Contact</NavLink></li>
        </ul>
      </nav>





      <div className="arrow"> 
    <a className="arrow-left" href="#" onClick={handleLeftArrowClick}><FontAwesomeIcon icon={faChevronLeft} /></a>
    <a className="arrow-right" href="#" onClick={handleRightArrowClick}><FontAwesomeIcon icon={faChevronRight} /></a>
  
        </div>
    </header>
  );
}

export default Header;
