import clsx from "clsx";
import { t } from "../helpers/helpers";

const Card = ({ svg, title, description, width }) => {
  return (
    <div className={clsx("flex flex-col items-center bg-transparent", width)}>
      <div
        className="mb-10 rounded-full bg-[#fff3ec] w-[72px] h-[72px] flex justify-center items-center text-[#FFA873]"
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      <h3 className="text-xl font-bold text-black mb-2 text-center">
        {t(title)}
      </h3>

      <p className=" font-normal text-base leading-[1.56] text-center text-[#aaa]">
        {t(description)}
      </p>
    </div>
  );
};

export default Card;
