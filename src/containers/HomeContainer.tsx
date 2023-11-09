import CarouselContainer from "./CarouselContainer";

const HomeContainer: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="mt-10 text-2xl font-medium text-center underline">
        BIENVENIDOS
      </h1>

      <CarouselContainer />
    </div>
  );
};

export default HomeContainer;
