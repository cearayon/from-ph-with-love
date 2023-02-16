export interface IButtonProps {
  text: string;
  className: string;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  className,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
