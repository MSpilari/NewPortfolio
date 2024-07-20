import { allLogos } from "@config/allSkillsLogos";
import { Card } from "@components/01_Atoms/Card";
import { allLogosCategory } from "@dto/LanguageContext";
import { TechLogosI } from "@dto/TechLogos";

const TechLogos: React.FC<TechLogosI> = ({ category }) => {
  return (
    <ul className="flex items-center justify-center flex-wrap gap-9">
      {allLogos[category as allLogosCategory] &&
        allLogos[category as allLogosCategory].length > 0 &&
        allLogos[category as allLogosCategory].map((icon, index) => {
          return <Card key={index} icon={icon.icon} name={icon.name} />;
        })}
    </ul>
  );
};

export { TechLogos };
