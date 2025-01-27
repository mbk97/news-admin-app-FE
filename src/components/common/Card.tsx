import { FaArrowTrendUp } from "react-icons/fa6";

interface IProps {
  cardTitle: string;
  cardDetails: any;
  CardIcon: any;
  cardSubtitle: string;
  cardType?: string;
}

const Card = ({
  cardTitle,
  cardDetails,
  CardIcon,
  cardSubtitle,
  cardType,
}: IProps) => {
  return (
    <div
      className="w-[100%] md:w-[300px] h-[160px] rounded-xl p-5"
      style={{
        background: cardType === "primary" ? "#465FF1" : "white",
        color: cardType === "primary" ? "#ffffff" : "black",
      }}
    >
      <div className="flex items-center gap-2">
        <CardIcon
          size={30}
          className={cardType == "primary" ? "text-white" : "text-primary"}
        />
        <h5 className="text-[18px] font-medium">{cardTitle}</h5>
      </div>

      <div className="flex items-center gap-2 my-3">
        <h3 className="text-[24px] font-semibold">
          {cardDetails}{" "}
          <span className="font font-normal text-[18px]">+2.8%</span>
        </h3>
        <FaArrowTrendUp />
      </div>

      <p className="text-[12px]">{cardSubtitle}</p>
    </div>
  );
};

export default Card;
