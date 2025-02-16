import IconDescItem from "../../components/Card/IconDescItem";
import HeroRigt from "../../components/Hero/HeroRight";
import { useItemContext } from "../../utils/context/ItemProvider";

const Section3 = () => {
  const { heroDummy, totalPenduduk } = useItemContext();
  return (
    <section className="flex md:flex-row flex-col items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      {heroDummy.map((item, index) => (
        <HeroRigt
          key={index}
          item={item}
          children={totalPenduduk.slice(0, 3).map((item, index) => (
            <IconDescItem key={index} item={item} />
          ))}
        />
      ))}
    </section>
  );
};

export default Section3;
