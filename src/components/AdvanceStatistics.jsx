import Card from "./Card";
import iconF from "../assets/icon-brand-recognition.svg";
import iconDetailed from "../assets/icon-detailed-records.svg";
import iconCustomized from "../assets/icon-fully-customizable.svg";
import Form from "./Form";

function AdvanceStatistics() {
  return (
    <div className=" bg-slate-100  container  mx-auto px-4">
      <Form />
      <div className="intro flex justify-center items-center flex-col mt-10 text-center  ">
        <h2 className=" text-5xl font-bold">Advance Statistics</h2>
        <p className=" text-xs text-neutral-grayish-violet pt-2">
          Track how your links are performing across the web with our advance
          statistics dashboard
        </p>
      </div>
      <div className="cards p-5 grid grid-cols-1  md:grid-cols-2 gap-16 md:gap-10 lg:grid-cols-3   mt-10 place-items-center">
        <div className="card">
          <Card
            icon={iconF}
            heading="Brand Recognition"
            content=" Boost your Brand recognition with each click. Generic links
      don't mean a thing.Branded links help instil confidence in your
      content."
            showline={false}
          />
        </div>

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
  );
}

export default AdvanceStatistics;
