import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="137" cy="130" r="119" />
      <rect x="-2" y="274" rx="6" ry="6" width="280" height="29" />
      <rect x="-1" y="315" rx="6" ry="6" width="280" height="84" />
      <rect x="3" y="420" rx="6" ry="6" width="98" height="31" />
      <rect x="138" y="407" rx="20" ry="20" width="137" height="50" />
    </ContentLoader>
  );
};

export default LoadingBlock;
