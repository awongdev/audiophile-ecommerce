interface IncludesT {
  quantity: number;
  item: string;
}

const Includes = ({ includes }: { includes: IncludesT[] }) => {
  return (
    <div className="sm:flex sm:gap-44 lg:block lg:min-w-[21.875rem]">
      <h2 className="mb-6 text-2xl font-bold uppercase md:mb-8 md:text-[2rem]">
        In the box
      </h2>
      <ul className="flex flex-col gap-2">
        {includes.map((includes: IncludesT, index: number) => (
          <li key={index} className="flex gap-6">
            {
              <span className="w-5 text-clr-orange-900">
                {includes.quantity}x
              </span>
            }
            {
              <span className="text-15px capitalize opacity-50">
                {includes.item}
              </span>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Includes;
