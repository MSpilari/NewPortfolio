import { ICard } from "@dto/Card";

const Card: React.FC<ICard> = ({ icon, name }) => {
  return (
    <div className="flex items-center justify-center w-16 h-14 lg:w-14 lg:h-10 xl:w-16 xl:h-14 hover:text-yellow-500">
      <div className="flex flex-col items-center w-full h-full relative">
        <div className=" w-full h-full flex items-center justify-center">
          <i className="text-5xl">{icon}</i>
        </div>

        <div className="flex items-center justify-center h-full w-full">
          <p className="text-xl lg:text-sm xl:text-xl text-center">{name}</p>
        </div>
      </div>
    </div>
  );
};

export { Card };
