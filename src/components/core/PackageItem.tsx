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
    <section className="grid grid-cols-2 items-center bg-pink-100">
      {/* <Image src={img} alt={name} fill /> */}
      <img src={img} alt={name} className="w-full" />

      <div
        className={`${
          reversed ? "col-start-1 row-start-1" : ""
        } flex flex-col place-content-center gap-2 px-40`}
      >
        <h2 className="text-center text-6xl text-rose-600">{name}</h2>
        <p className="text-center text-xl text-rose-600">{description}</p>
      </div>
    </section>
  );
};
