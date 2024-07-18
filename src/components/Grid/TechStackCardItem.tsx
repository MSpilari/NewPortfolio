const TechStackCardItem = ({ item }: { item: string }) => {
  return (
    <span
      key={item}
      className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
    >
      {item}
    </span>
  );
};

export { TechStackCardItem };
