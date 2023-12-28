function SocialMediaIcon({ logo, description = "social media icon" }) {
  return (
    <div className="icon hover:bg-primary-cyan p-1 rounded-full">
      <img
        src={`${logo}`}
        alt={`${description}`}
        className=" w-5 h-5  hover:bg-neutral-very-dark-violet hover:cursor-pointer"
      />
    </div>
  );
}

export default SocialMediaIcon;
