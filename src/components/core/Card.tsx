import Image from "next/image";

export const Card: React.FC = (props) => {
  const { packageName, packageItems, packageImg } = props.menu;

  return (
    <div className="mb-5 flex w-full flex-col items-center rounded-md bg-rose-400 py-4 drop-shadow-md">
      <Image src={packageImg} alt="packageImg" width="80" height="80" />
      <div className="flex flex-col items-center py-4">
        <h2 className="text-xl">{packageName}</h2>
        <p>{packageItems}</p>
      </div>
    </div>
  );
};
