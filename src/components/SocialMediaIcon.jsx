function SocialMediaIcon({ logo, description = "social media icon" }) {
  return (
    <div className="icon  p-1 rounded-full">
      <img
        src={`${logo}`}
        alt={`${description}`}
        className=" w-5 h-5   hover:cursor-pointer"
      />
    </div>
  );
}

export default SocialMediaIcon;
