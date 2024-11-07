interface ICustomButton {
  btnName: string;
  onClick: () => void;
  disabled?: boolean;
}

const CustomButton = ({
  btnName,
  onClick,
  disabled = false,
}: ICustomButton) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <>
      <button type='button' onClick={handleClick} disabled={disabled}>
        {btnName}
      </button>
    </>
  );
};

export default CustomButton;
