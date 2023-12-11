function Card({ icon, content, heading }) {
  return (
    <article className=" relative bg-white shadow-lg rounded-lg  text-center p-2 w-[15rem] py-10">
      <div className="card-icon w-12 h-12 p-3 rounded-full absolute bg-primary-dark-violet -top-5 left-10">
        <img src={`${icon}`} alt="" />
      </div>
      <h4 className=" text-xl font-bold mb-2 pt-4">{heading} </h4>
      <p className=" text-xs text-neutral-grayish-violet">{content}</p>
    </article>
  );
}

export default Card;
