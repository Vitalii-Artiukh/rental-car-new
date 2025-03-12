const Icon = ({ name, fill, stroke, width = 16, height = 16, className }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      className={className}
    >
      <use href={`/src/assets/svg/mainSvg.svg#${name}`}></use>
    </svg>
  );
};

export default Icon;
