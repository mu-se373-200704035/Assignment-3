import './ExploreContainer.css';

import Counter from "./Counter";

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <Counter />
      <p id="p1">
        You can click the buttons above to change the count!
      </p>
    </div>
  );
};

export default ExploreContainer;
