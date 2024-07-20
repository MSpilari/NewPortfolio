import { useLanguage } from "@hooks/languageHook";
import { FaLinkedin } from "react-icons/fa";

const AboutText: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="h-full w-full mx-auto z-0 bg-[rgba(0,0,0,0.8)] text-white flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl animate-bounce text-yellow-500">
        {language.AboutTitle}
      </h1>

      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-3">
        {language.Experience.map((exp, i) => (
          <div
            key={i}
            className="flex w-96 h-28 items-center justify-center border border-white rounded-xl p-4 bg-gray-950"
          >
            <img src={exp.expImg} alt={exp.expName} />
            <div className="h-full w-full flex flex-col relative items-center justify-center">
              <p className="absolute top-0 right-0 text-gray-400 text-sm">
                {exp.expDate}
              </p>
              <p className="text-yellow-500 text-xl line-clamp-1">
                {exp.expName}
              </p>
            </div>
          </div>
        ))}
        <a
          href="https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center border border-white self-end rounded-xl p-2 hover:border-yellow-500 hover:text-yellow-500 lg:col-start-2 lg:place-self-end"
        >
          {language.ExperienceButton}
          {<FaLinkedin className="text-xl ml-1 text-blue-500" />}
        </a>
      </div>
    </div>
  );
};

export { AboutText };
