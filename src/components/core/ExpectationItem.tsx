export interface IExpectationItemProps {
  label: string;
  description: string;
}

export const ExpectationItem: React.FC<IExpectationItemProps> = ({
  label,
  description,
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 rounded-full bg-amber-200 p-8 text-center">
      <h2 className="text-lg font-semibold text-rose-600">{label}</h2>
      <p className="text-base text-rose-600">{description}</p>
    </div>
  );
};
