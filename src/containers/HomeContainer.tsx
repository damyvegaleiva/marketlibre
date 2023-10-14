import Carousel from "../components/Carousel";

const HomeContainer: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="mt-10 text-2xl font-medium text-center underline">
        BIENVENIDOS
      </h1>

      <Carousel />
    </div>
  );
};

export default HomeContainer;
