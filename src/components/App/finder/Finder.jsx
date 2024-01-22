import {
  ArrowLongDownIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowLongUpIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import temp_data from "../../../temp.json";
import Showcase from "../showcase/Showcase";
import ToolTip from "@/components/shared/ToolTip";

function Finder() {
  const usersToRender = temp_data.data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextClickType, setNextClickType] = useState("");
  const [showNextClickedMessage, setShowNextClickedMessage] = useState(false);
  const arrowIcons = [
    { name: ArrowLongDownIcon, toolTip: "Scroll down" },
    { name: ArrowLongUpIcon, toolTip: "Scroll up" },
    { name: ArrowLongLeftIcon, toolTip: "Pass" },
    { name: ArrowLongRightIcon, toolTip: "Like" },
  ];

  const nextShowcase = (clickType) => {
    setShowNextClickedMessage(true);
    setNextClickType(clickType);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % usersToRender.length);
      setShowNextClickedMessage(false);
    }, 500);
  };

  const handleLiked = () => {
    nextShowcase("liked");
  };

  const handlePassed = () => {
    nextShowcase("passed");
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 39) handleLiked();
    else if (event.keyCode === 37) handlePassed();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="finder-wrapper cc-finder-height">
      <div className="finder cc-finder-height mt-6 select-none overflow-auto scroll-smooth rounded-2xl border border-gray-300 bg-theme-purple-100 outline-0 focus:outline-none">
        {showNextClickedMessage && (
          <NextClickMessage
            type={nextClickType === "liked" ? "Liked" : "Passed"}
          />
        )}

        {usersToRender.map((user, idx) => {
          return (
            <Showcase key={idx} user={user} isVisible={idx === currentIndex} />
          );
        })}
      </div>
      <div className="arrow-key-indicators ml-6 mt-2 flex gap-3.5">
        {arrowIcons.map((icon, idx) => (
          <ToolTip title={icon.toolTip} key={idx} toolTip={icon.toolTip}>
            <icon.name className="h-5 w-5 rounded bg-gray-100  stroke-current stroke-1 p-1 text-gray-500" />
          </ToolTip>
        ))}
      </div>
      <div className="actions -mt-[4.4rem] flex items-center justify-center gap-6">
        <div
          onClick={handlePassed}
          className="pass flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-gray-200  bg-white transition-all hover:scale-105 hover:shadow-xl"
        >
          <XMarkIcon className="h-7 stroke-current stroke-2 text-gray-500" />
        </div>
        <div
          onClick={handleLiked}
          className="like flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white transition-all hover:scale-105 hover:shadow-xl"
        >
          <CheckIcon className="h-7 stroke-current stroke-2 text-theme-purple" />
        </div>
      </div>
    </section>
  );
}

function NextClickMessage({ type }) {
  return (
    <div
      className={`next-clicked-message flex h-full items-center justify-center ${
        type.toLowerCase() === "liked" ? "bg-theme-purple/70" : "bg-gray-200"
      } font-medium`}
    >
      {type.toLowerCase() === "liked" ? (
        <div className="check-icon-wrapper rounded-full bg-white p-6">
          <CheckIcon className="h-16 w-16 stroke-current stroke-2 text-theme-purple" />
        </div>
      ) : (
        <div className="check-icon-wrapper rounded-full bg-white p-6">
          <XMarkIcon className="h-16 w-16 stroke-current stroke-2 text-gray-500" />
        </div>
      )}
    </div>
  );
}

export default Finder;
