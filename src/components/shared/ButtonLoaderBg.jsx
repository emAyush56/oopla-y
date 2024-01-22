import ButtonLoader from "./ButtonLoader";

function ButtonLoaderBg({ color = "bg-white", h = "h-3", w = "w-3" }) {
  return (
    <div className="mx-auto flex w-fit items-center justify-center rounded-3xl bg-theme-purple px-3 py-2">
      <ButtonLoader color={color} h={h} w={w} />
    </div>
  );
}

export default ButtonLoaderBg;
