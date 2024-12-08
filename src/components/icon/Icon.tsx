type IconIdType =
  | '25th-box'
  | '26th-box'
  | '27th-box'
  | '28th-box'
  | '29th-box'
  | '30th-box'
  | '31th-box'
  | 'delete'
  | 'question'
  | 'santa'
  | 'search'
  | 'snow-crystal';

type ColorType = 'red' | 'green';

const colorMap: Record<ColorType, string> = {
  red: '#E02626',
  green: '#1E8926',
};

interface IconProps {
  id: IconIdType;
  width?: number;
  height?: number;
  className?: string;
  color?: ColorType;
}

const Icon = ({ id, width, height, className, color }: IconProps) => {
  const resolvedColor = color ? colorMap[color] : undefined;

  return (
    <svg
      {...(width ? { width: `${width}px` } : {})}
      {...(height ? { height: `${height}px` } : {})}
      className={`${className || ''}`}
      aria-hidden="true"
      style={resolvedColor ? { color: resolvedColor } : {}}
    >
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};

export default Icon;
