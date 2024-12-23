import { useEffect, useState } from 'react';
import mute from '@/assets/images/mute.png';
import volume1 from '@/assets/images/volume1.png';
import volume2 from '@/assets/images/volume2.png';
import volume3 from '@/assets/images/volume3.png';
import TecheerventBGM from '@/assets/sounds/TecheerventBGM.mp3';

type MobileVolumeType = 0 | 3;
type PcVolumeType = 0 | 1 | 2 | 3;

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
  const [isMobile, setIsMobile] = useState(false);
  const [volume, setVolume] = useState<MobileVolumeType | PcVolumeType>(0);
  const [audio] = useState(new Audio(TecheerventBGM));

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);

  useEffect(() => {
    audio.loop = true;
    audio.play().catch((error) => {
      console.error('Audio playback failed:', error);
    });
  }, [audio]);

  useEffect(() => {
    if (volume === 0) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
      audio.volume = volumeValueMap[volume];
    }
  }, [volume, audio]);

  const handleVolumeClick = () => {
    if (isMobile) {
      setVolume((prev) => (prev === 3 ? 0 : 3));
    } else {
      setVolume((prev) => (prev === 3 ? 0 : prev + 1) as PcVolumeType);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button className="w-8 h-8" onClick={handleVolumeClick}>
        <img src={volumeSrcMap[volume]} alt="volume" />
      </button>
    </div>
  );
};

export default BGM;
