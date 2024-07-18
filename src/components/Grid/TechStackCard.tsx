import { TechStackCardItem } from "./TechStackCardItem";

const TechStackCard = () => {
  const leftLists = ["ReactJS", "SpringBoot", "Typescript", "MongoDB"];
  const rightLists = ["AngularJs", "NextJS", "RestAPI", "MySQL"];

  return (
    <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
      <div className="flex flex-col gap-3 lg:gap-8">
        {leftLists.map((item, i) => (
          <TechStackCardItem item={item} key={item} />
        ))}
        <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
      </div>

      <div className=" flex flex-col gap-3 lg:gap-8">
        <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
        {rightLists.map((item) => (
          <TechStackCardItem item={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export { TechStackCard };
