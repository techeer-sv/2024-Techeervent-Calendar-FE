import React, { useEffect, useState } from 'react';
import bell_F from '../../../assets/images/bell_F.png';
import bell_G from '../../../assets/images/bell_G.png';
import bell_A from '../../../assets/images/bell_A.png';
import bell_C from '../../../assets/images/bell_C.png';
import bell_A_sound from '../../../assets/sounds/bell_A_sound.mp3';
import bell_C_sound from '../../../assets/sounds/bell_C_sound.mp3';
import bell_F_sound from '../../../assets/sounds/bell_F_sound.mp3';
import bell_G_sound from '../../../assets/sounds/bell_G_sound.mp3';

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
      console.log('이스터에그요');
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
