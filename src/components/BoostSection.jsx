import Button from "./Button";

function BoostSection() {
  return (
    <div className=" form_bg  bg-primary-dark-violet container  mx-auto px-4  py-5 flex flex-col justify-center items-center gap-5">
      <h3 className=" text-2xl text-white font-bold">Boost your links today</h3>
      <Button buttonText="Get Started" btn_primary="btn_primary" />
    </div>
  );
}

export default BoostSection;
