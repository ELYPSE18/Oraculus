import React, { useState } from 'react';
import '../styles/main.css';
import Horoscope from './horoscope';
import horoscope from '../data/horoscope.json';
import { useDataContext } from '../pages/DataContext';

function Main() {
    const {currentIndex, setCurrentIndex} = useDataContext();

    const handleLeftArrowClick = () => {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1);
    };

    const handleRightArrowClick = () => {
        setCurrentIndex(currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0);
    };

    return (
        <main className="custom-main">
            <section>
                <div>
                    <a className="left-horoscope" href="#" onClick={handleLeftArrowClick}>
                        {horoscope[currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1]?.signe}
                        <span>{horoscope[currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1]?.date}</span>
                    </a>
                    <a className="right-horoscope" href="#" onClick={handleRightArrowClick}>
                    {horoscope[currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0]?.signe}
                        <span>{horoscope[currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0]?.date}</span>
                    </a>
                </div>

                <article>
                    <Horoscope horoscope={horoscope[currentIndex]} />
                </article>
            </section>

            <aside>
                <img src={horoscope[currentIndex].image} alt={horoscope[currentIndex].signe} />
            </aside>
        </main>
    );
}

export default Main;
