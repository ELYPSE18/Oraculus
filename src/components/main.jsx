import React, { useState } from 'react';
import '../styles/main.css';
import Horoscope from './horoscope';
import horoscope from '../data/horoscope.json';

function Main() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftArrowClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + horoscope.length) % horoscope.length);
    };

    const handleRightArrowClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % horoscope.length);
    };

    return (
        <main className="custom-main">
            <section>
                <div>
                    <a className="left-horoscope" href="#" onClick={handleLeftArrowClick}>
                        {horoscope[(currentIndex - 1 + horoscope.length) % horoscope.length].signe}
                        <span>{horoscope[(currentIndex - 1 + horoscope.length) % horoscope.length].date}</span>
                    </a>
                    <a className="right-horoscope" href="#" onClick={handleRightArrowClick}>
                        {horoscope[(currentIndex + 1) % horoscope.length].signe}
                        <span>{horoscope[(currentIndex + 1) % horoscope.length].date}</span>
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
