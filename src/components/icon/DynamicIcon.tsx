import Lottie from 'lottie-react';
import snowData from '@/assets/lotties/snow.json';

const lottieMap = {
  snow: snowData,
};

interface DynamicIconProps {
  className?: string;
  type: keyof typeof lottieMap;
}

const DynamicIcon = ({ className, type }: DynamicIconProps) => {
  return (
    <div className={className}>
      <Lottie
        animationData={lottieMap[type]}
        loop
        autoPlay
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default DynamicIcon;
