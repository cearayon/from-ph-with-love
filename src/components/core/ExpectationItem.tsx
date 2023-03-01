export interface IExpectationItemProps {
  label: string;
  description: string;
}

export const ExpectationItem: React.FC<IExpectationItemProps> = ({
  label,
  description,
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-full border border-solid border-rose-400 bg-pink-100 px-6 py-4 text-center shadow-md transition-shadow hover:shadow-xl">
      <h2 className="text-lg font-semibold text-rose-600">{label}</h2>
      <p className="text-base text-rose-600">{description}</p>
    </div>
  );
};
