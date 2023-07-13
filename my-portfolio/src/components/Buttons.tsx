interface Props {
  type: string;
  bName: string;
  onClick: () => void;
}
function Buttons({ type, bName, onClick }: Props) {
  return (
    <>
      <button type="button" className={type} onClick={onClick}>
        {bName}
      </button>
    </>
  );
}

export default Buttons;
