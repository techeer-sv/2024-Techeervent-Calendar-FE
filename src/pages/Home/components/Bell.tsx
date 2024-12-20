/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import bell_F from '../../../assets/images/bell_F.svg';
import bell_G from '../../../assets/images/bell_G.svg';
import bell_A from '../../../assets/images/bell_A.svg';
import bell_C from '../../../assets/images/bell_C.svg';
import bell_A_sound from '../../../assets/sounds/bell_A_sound.mp3';
import bell_C_sound from '../../../assets/sounds/bell_C_sound.mp3';
import bell_F_sound from '../../../assets/sounds/bell_F_sound.mp3';
import bell_G_sound from '../../../assets/sounds/bell_G_sound.mp3';

declare global {
  interface Window {
    confetti: any;
  }
}

const Bell = () => {
  const [combo, setCombo] = useState('');
  const [shakingBells, setShakingBells] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleShake = (bellKey: string, sound: string) => {
    setShakingBells((prev) => ({ ...prev, [bellKey]: true }));
    setTimeout(() => {
      setShakingBells((prev) => ({ ...prev, [bellKey]: false }));
    }, 500);

    setCombo((pre) => pre + sound);
    const audio = new Audio(soundMap[bellKey]);
    audio.play();
  };

  useEffect(() => {
    if (combo.includes('AAA' + 'AAA' + 'ACFGA')) {
      //폭죽이 나오는 트리거
      firework();
      setCombo('');
    }
  }, [combo]);

  return (
    <div>
      {bells.map(({ src, className, key, sound }) => (
        <img
          key={key}
          src={src}
          alt="징글벨"
          className={`cursor-pointer ${className} ${shakingBells[key] ? 'shake' : ''}`}
          onClick={() => handleShake(key, sound)}
        />
      ))}
    </div>
  );
};

export default Bell;

const bells = [
  {
    sound: 'F',
    src: bell_F,
    className: 'absolute w-16 h-13 top-6 left-12',
    key: 'bell_F',
  },
  {
    sound: 'G',
    src: bell_G,
    className: 'absolute w-14 h-13 top-2 left-44',
    key: 'bell_G',
  },
  {
    sound: 'A',
    src: bell_A,
    className: 'absolute w-14 h-13 top-6 left-72',
    key: 'bell_A',
  },
  {
    sound: 'C',
    src: bell_C,
    className: 'absolute w-14 h-13 top-2 left-96',
    key: 'bell_C',
  },
];

const soundMap: { [key: string]: string } = {
  bell_A: bell_A_sound,
  bell_C: bell_C_sound,
  bell_F: bell_F_sound,
  bell_G: bell_G_sound,
};

function firework() {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 0 };
  //  startVelocity: 범위, spread: 방향, ticks: 갯수

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    window.confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    window.confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}
