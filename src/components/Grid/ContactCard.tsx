import { FiMessageCircle } from "react-icons/fi";
import { BorderMagicButton } from "../../ui/BorderMagicButton";

const ContactCard = () => {
  return (
    <div className="mt-5 relative">
      <a href="#contact">
        <BorderMagicButton
          title={"Contact Me !"}
          icon={<FiMessageCircle />}
          position="right"
          otherClasses="!bg-[#161A31]"
        />
      </a>
    </div>
  );
};

export { ContactCard };
