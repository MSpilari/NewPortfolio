import { useLanguage } from "@hooks/languageHook";
import { TechLogos } from "@components/02_Molecules/TechLogos";

const SkillsText = () => {
  const { language } = useLanguage();

  return (
    <div
      className="w-full mx-auto mb-14 mt-2 z-10 text-white flex flex-col items-center justify-around 
		lg:w-full lg:h-full lg:flex-row lg:overflow-hidden lg:bg-[rgba(0,0,0,0.7)] lg:mb-0 lg:mt-0"
    >
      <div className="w-full flex flex-col items-center">
        <h1 className="text-xl text-yellow-500 animate-bounce lg:text-3xl">
          {language.SkillsTitle}
        </h1>

        {language.SkillsInfo.map((v, i) => {
          return (
            <section
              className="flex flex-col w-11/12 gap-2 mb-9 lg:text-xs xl:text-base"
              key={i}
            >
              <h2 className="text-yellow-500 text-lg">{v.title}</h2>

              <div className="flex flex-col lg:flex-row gap-4 lg:gap-2">
                <TechLogos category={v.category} key={v.title} />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export { SkillsText };
