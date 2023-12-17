import Card from "./Card";
import iconF from "../assets/icon-brand-recognition.svg";
import iconDetailed from "../assets/icon-detailed-records.svg";
import iconCustomized from "../assets/icon-fully-customizable.svg";
import Form from "./Form";
import ShortLink from "./ShortLink";

function AdvanceStatistics() {
  return (
    <div className="bg-slate-100  container  mx-auto mt-20 relative">
      <div className="formContainer  w-[80%] text-center mx-auto p-2 absolute -top-16 left-[3rem] sm:left-16 md:left-20">
        <Form />
        <div className="results">
          <ShortLink />
          <ShortLink />
          <ShortLink />
        </div>
      </div>

      <div className="advanceStatistics pt-[33rem] md:pt-[20rem] ">
        <div className="intro flex justify-center items-center flex-col mt-10 text-center  ">
          <h2 className=" text-5xl font-bold">Advance Statistics</h2>
          <p className=" text-xs text-neutral-grayish-violet pt-2">
            Track how your links are performing across the web with our advance
            statistics dashboard
          </p>
        </div>
        <div className="cards p-5 flex flex-col   md:flex-row  gap-16 md:gap-5 items-center justify-center   mt-10 place-items-center  w-full">
          <Card
            icon={iconF}
            heading="Brand Recognition"
            content=" Boost your Brand recognition with each click. Generic links
        don't mean a thing.Branded links help instil confidence in your
        content."
            showline={false}
          />

          <Card
            icon={iconDetailed}
            heading="Detailed Records"
            content="Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions."
            showline={false}
          />
          <Card
            icon={iconCustomized}
            heading="Fully Customizable"
            content="Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement."
            showline={false}
          />
        </div>
      </div>
    </div>
  );
}

export default AdvanceStatistics;
