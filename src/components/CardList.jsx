import clsx from "clsx";
import { cardData } from "../config/cards.config";
import Card from "./Card";

const CardList = () => {
  return (
    <ul
      className={clsx(
        "flex flex-col gap-[20px] justify-between mx-auto max-w-[1100px]",
        "lg:flex-row lg:gap-[100px]",
        "xl:gap-[120px]"
      )}
    >
      {cardData.map((card) => (
        <li key={card.id}>
          <Card
            svg={card.svg}
            title={card.title}
            description={card.description}
            width={card.width}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
