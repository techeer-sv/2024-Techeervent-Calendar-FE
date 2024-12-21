import { useEffect } from 'react';

const SNOW_NUMBER = 80;
const MIN_DURATION = 10;
const Snow = () => {
  const body = document.querySelector('body');
  const fallDistance = document.documentElement.scrollHeight;
  document.documentElement.style.setProperty(
    '--fall-distance',
    `${fallDistance - 100}px`
  );
  useEffect(() => {
    const makeSnow = () => {
      //6 ~ 10
      const size = Math.random() * (15 - 6) + 6;
      const snowflake = document.createElement('div');
      const delay = Math.random();
      const initialOpacity = Math.random() * (0.8 - 0.1) + 0.1;
      const duration = Math.random() * 10 + MIN_DURATION;

      snowflake.classList.add('snowflake');
      snowflake.style.left = `${(Math.random() - 0.1) * window.innerWidth}px`;
      snowflake.style.animationDelay = `${delay}s`;
      snowflake.style.opacity = String(initialOpacity);
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
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
