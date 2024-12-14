import { useEffect } from 'react';

const SNOW_NUMBER = 40;
const MIN_DURATION = 10;
const Snow = () => {
  const body = document.querySelector('body');

  useEffect(() => {
    const makeSnow = () => {
      const snowflake = document.createElement('div');
      const delay = Math.random();
      const initialOpacity = Math.random();
      const duration = Math.random() * 10 + MIN_DURATION;

      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * window.innerWidth}px`;
      snowflake.style.animationDelay = `${delay}s`;
      snowflake.style.opacity = String(initialOpacity);
      snowflake.style.animation = `fall ${duration}s linear`;

      body?.appendChild(snowflake);

      setTimeout(
        () => {
          body?.removeChild(snowflake);
          makeSnow();
        },
        (duration + delay) * 1000
      );
    };

    for (let i = 0; i < SNOW_NUMBER; i++) {
      setTimeout(makeSnow, 500 * i);
    }
  }, []);

  return null;
};

export default Snow;
