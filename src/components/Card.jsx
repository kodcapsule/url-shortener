function Card({ icon, content, heading, showline = true }) {
  return (
    <article
      className={` relative bg-white shadow-lg ${
        showline && "topLine"
      } rounded-lg z-10 text-center p-2 w-[15rem] py-10 md:clearLine`}
    >
      <div className="card-icon w-12 h-12 p-3 rounded-full absolute bg-primary-dark-violet -top-5 left-24 md:left-10">
        <img src={`${icon}`} alt="" className="z-10" />
      </div>
      <h4 className=" text-xl md:text-base font-bold mb-2 pt-4">{heading} </h4>
      <p className=" text-xs text-neutral-grayish-violet">{content}</p>
    </article>
  );
}

export default Card;
