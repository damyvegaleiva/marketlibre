type PictureDisplayProps = {
  pictureUrl: string | undefined;
};

const PictureDisplay: React.FC<PictureDisplayProps> = ({ pictureUrl }) => {
  return (
    <figure className="order-1 w-[90%] h-96 m-auto lg:order-2">
      <img src={pictureUrl} alt="" className="object-contain w-full h-full" />
    </figure>
  );
};

export default PictureDisplay;
