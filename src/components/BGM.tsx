import { useEffect, useRef, useState } from 'react';
import mute from '@/assets/images/mute.png';
import volume1 from '@/assets/images/volume1.png';
import volume2 from '@/assets/images/volume2.png';
import volume3 from '@/assets/images/volume3.png';
import TecheerventBGM from '@/assets/sounds/TecheerventBGM.mp3';

type VolumeType = 0 | 1 | 2 | 3;

const volumeSrcMap = {
  0: mute,
  1: volume1,
  2: volume2,
  3: volume3,
};

const volumeValueMap = {
  0: 0.0, // 음소거
  1: 0.3, // 낮은 볼륨
  2: 0.6, // 중간 볼륨
  3: 1.0, // 최대 볼륨
};

const BGM = () => {
  const [volume, setVolume] = useState<VolumeType>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volumeValueMap[volume];
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
    }
  }, []);

  const handleVolumeClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }
    setVolume((prev) => (prev === 3 ? 0 : prev + 1) as VolumeType);
  };

  return (
    <div className="fixed top-8 right-8">
      <button className="w-8 h-8" onClick={handleVolumeClick}>
        <img src={volumeSrcMap[volume]} alt="volume" />
      </button>
      <audio ref={audioRef} src={TecheerventBGM} />
    </div>
  );
};

export default BGM;
