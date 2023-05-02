const Features = ({ features }: { features: string }) => {
  return (
    <div className="lg:max-w-[40rem]">
      <h2 className="mb-6 text-2xl font-bold uppercase md:mb-8 md:text-[2rem]">
        Features
      </h2>
      <p className="whitespace-pre-line text-15px font-medium opacity-50">
        {features}
      </p>
    </div>
  );
};

export default Features;
