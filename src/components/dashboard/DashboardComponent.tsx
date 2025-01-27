import { FaSearch } from "react-icons/fa";
import { cardData } from "../../utils/data";
import Card from "../common/Card";
import React from "react";

const DashboardComponent = () => {
  return (
    <React.Fragment>
      <main className="flex gap-5 mt-[40px] md:mt-[0px]">
        <section className="w-[100%] ">
          <div className="mb-[40px] ">
            <div className="w-[100%] relative">
              <input
                type="text"
                className="h-[42px] bg-[#ffffff] w-[100%]  rounded-md border-[red] p-3 outline-primary"
                placeholder="Search"
              />
              <div className="absolute right-4 top-3">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            {cardData.map((card) => {
              return (
                <Card
                  key={card.id}
                  cardDetails={card.cardDetails}
                  CardIcon={card.CardIcon}
                  cardSubtitle={card.cardSubtitle}
                  cardTitle={card.cardTitle}
                  cardType={card.cardType}
                />
              );
            })}
          </div>
        </section>
        <section className="md:w-[20%] w-[0] md:block hidden">
          <div className="h-[42px] bg-[#ffffff] w-[100%]  rounded-md border-[red] p-3 outline-primary"></div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default DashboardComponent;
