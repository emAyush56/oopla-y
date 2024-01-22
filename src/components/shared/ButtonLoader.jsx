const ButtonLoader = ({ color = "bg-white", h = "h-2", w = "w-2" }) => {
  return (
    <span className="inline-flex items-center gap-px">
      <span
        className={`mx-px animate-blink rounded-full ${color} ${h} ${w}`}
      ></span>
      <span
        className={`mx-px animate-blink rounded-full ${color} ${h} ${w} animation-delay-150`}
      ></span>
      <span
        className={`mx-px animate-blink rounded-full ${color} ${h} ${w} animation-delay-300`}
      ></span>
    </span>
  );
};

export default ButtonLoader;
