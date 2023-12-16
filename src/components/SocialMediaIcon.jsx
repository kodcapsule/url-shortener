function SocialMediaIcon({ logo, description = "social media icon" }) {
  return (
    <img
      src={`${logo}`}
      alt={`${description}`}
      className=" w-5 h-5  hover:fill-primary-cyan hover:cursor-pointer"
    />
  );
}

export default SocialMediaIcon;
