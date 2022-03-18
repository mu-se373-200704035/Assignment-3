import './ExploreContainer.css';

import Counter from "./Counter";{/* The component I created is imported here */}

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <Counter /> {/* The component I created is called here in this JSX object. */}
      <p id="p1">
        You can click the buttons above to change the count!
      </p>
    </div>
  );
};

export default ExploreContainer;
