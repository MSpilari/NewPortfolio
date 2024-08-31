import Image from "next/image";

const StackIcon = ({ icon }: { icon: { url: string; name: string } }) => {
  return (
    <div className="flex flex-col items-center justify-center w-36 h-32">
      <div className="w-12 h-10 relative flex items-center justify-center">
        <Image src={icon.url} alt="Logo" fill={true} />
      </div>
      <p className="mt-2">{icon.name}</p>
    </div>
  );
};

export { StackIcon };
