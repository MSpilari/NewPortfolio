import React from "react";
import { IconType } from "react-icons";

const ArticleTags: React.FC<{ tag_list: (string | IconType)[] }> = ({
  tag_list,
}) => {
  return (
    <div className="flex items-center justify-between absolute bottom-3 left-4">
      <div className="flex items-center">
        {tag_list.map((Icon, index) => (
          <div
            key={index}
            className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
            style={{ transform: `translateX(-${5 * index * 2}px)` }}
          >
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ArticleTags };
