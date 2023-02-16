import Image from "next/image";

export interface IPackageItemProps {
  name: string;
  description: string;
  img: string;
  className?: string;
}

export const PackageItem: React.FC<IPackageItemProps> = ({
  name,
  description,
  img,
  className,
}) => {
  return (
    <section className={`${className} flex items-center bg-pink-100`}>
      <div className="relative">
        <Image src={img} alt={name} width="400" height="400" />
      </div>
      <div className="flex flex-col place-content-center gap-2 px-40">
        <h2 className="text-center text-6xl text-rose-600">{name}</h2>
        <p className="text-center text-xl text-rose-600">{description}</p>
      </div>
    </section>
  );
};
