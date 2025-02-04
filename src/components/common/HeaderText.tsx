interface IProps {
  text: string;
}

const HeaderText = ({ text }: IProps) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <h1 className="font-semibold text-[20px]">{text}</h1>
      </div>
    </div>
  );
};

export default HeaderText;
