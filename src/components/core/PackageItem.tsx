export interface IPackageItemProps {
  name: string;
  description: string;
  img: string;
  reversed?: boolean;
}

export const PackageItem: React.FC<IPackageItemProps> = ({
  name,
  description,
  img,
  reversed = false,
}) => {
  return (
    <section className="grid grid-cols-2 items-center border-y border-solid border-rose-600 bg-pink-200">
      <img src={img} alt={name} className="h-full w-full" />

      <div
        className={`${
          reversed ? "row-start-1 md:col-start-1" : ""
        } flex flex-col place-content-center gap-2`}
      >
        <h2 className="text-center  text-4xl text-rose-600 md:text-6xl">
          {name}
        </h2>
        <p className="text-center text-xl text-rose-600">{description}</p>
      </div>
    </section>
  );
};
