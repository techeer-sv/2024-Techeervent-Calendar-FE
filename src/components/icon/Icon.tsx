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
  | 'search';

interface IconProps {
  id: IconIdType;
  width?: number;
  height?: number;
  className?: string;
}

const Icon = ({ id, width, height, className }: IconProps) => {
  return (
    <svg
      {...(width ? { width: `${width}px` } : {})}
      {...(height ? { height: `${height}px` } : {})}
      className={`${className || ''}`}
      aria-hidden="true"
    >
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};

export default Icon;
