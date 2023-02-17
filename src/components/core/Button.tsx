export interface IButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  text,

  onClick,
}) => {
  return (
    <button
      className="rounded-full bg-rose-600 p-4 text-center text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
