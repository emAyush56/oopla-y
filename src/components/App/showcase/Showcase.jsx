import { useEffect, useState } from "react";
import { BoltIcon, GlobeAmericasIcon } from "@heroicons/react/24/solid";
import {
  DrinkingIcon,
  EducationIcon,
  ExerciseIcon,
  HeightIcon,
  KidsIcon,
  LookingIcon,
  SmokingIcon,
} from "@/icons/basicsIcons";
import DynamicSlides from "./DynamicSlides";
import { calcAge, calcUserFirstName } from "@/utils/userUtils";

function Showcase({ user, isVisible }) {
  const [cursorAboveHalf, setCursorAboveHalf] = useState(null);

  // extracting items for mybasics and setting icons to them
  const userBasicsObj = [
    {
      id: 1,
      icon: HeightIcon,
      name: "height",
      value: user?.height,
    },
    {
      id: 2,
      icon: ExerciseIcon,
      name: "exercise",
      value: user?.exercise,
    },
    {
      id: 3,
      icon: EducationIcon,
      name: "education level",
      value: user?.education_level,
    },
    {
      id: 4,
      icon: DrinkingIcon,
      name: "drinking",
      value: user?.drinking,
    },
    {
      id: 5,
      icon: SmokingIcon,
      name: "smoking",
      value: user?.drinking,
    },
    {
      id: 6,
      icon: LookingIcon,
      name: "looking for",
      value: user?.looking_for,
    },
    {
      id: 7,
      icon: KidsIcon,
      name: "kids",
      value: user?.kids,
    },
  ];

  const handleClick = () => {
    const showcase = document.getElementById("showcase");
    const currentSlideHeight = showcase.clientHeight;

    if (cursorAboveHalf) {
      showcase.scrollTop -= currentSlideHeight;
    } else {
      showcase.scrollTop += currentSlideHeight;
    }
  };

  const handleMouseMove = (event) => {
    const { clientY } = event;
    const { top, height } = event.currentTarget.getBoundingClientRect();
    const cursorYPosition = clientY - top;

    if (event.currentTarget.id === "showcase") {
      if (cursorYPosition > height / 2) {
        setCursorAboveHalf(false);
      } else {
        setCursorAboveHalf(true);
      }
    }
  };

  const handleKeyDown = (event) => {
    const showcase = document.getElementById("showcase");
    const currentSlideHeight = showcase.clientHeight;

    if (event.keyCode === 38) {
      showcase.scrollTop -= currentSlideHeight;
    } else if (event.keyCode === 40) {
      showcase.scrollTop += currentSlideHeight;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      id="showcase"
      className={`showcase ${
        cursorAboveHalf ? "cursor-up" : "cursor-down"
      } h-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth`}
    >
      <div
        className={`showcase__slide_1 flex h-full ${
          cursorAboveHalf ? "cursor-null" : "cursor-down"
        } snap-start`}
      >
        <div className="showcase__slide_1__left h-full w-1/2">
          <img src={user?.images[0]} className="h-full w-full object-cover" />
        </div>
        <div className="showcase__slide_1__right flex w-1/2 flex-col justify-center px-12">
          <h2 className=" ff-taviraj text-3xl font-bold">
            {`${calcUserFirstName(user?.name, true)}, ${calcAge(user?.dob)}`}
          </h2>
          <div className="slide_1__right__content text mt-4 flex flex-col gap-[3px]">
            <span className="text-[14px] font-medium tracking-wide text-gray-700">
              {user?.job[0]?.id &&
                `${user?.job[0]?.job_title} at ${user?.job[0]?.job_company}`}
            </span>
            <span className="text-[14px] font-medium tracking-wide text-gray-700">
              {user?.education[0]?.id &&
                `${user?.education[0].institution_name}, ${user?.education[0].graduation_year}`}
            </span>
          </div>
        </div>
      </div>

      <div className="showcase__slide_2 flex h-full snap-start">
        <div className="showcase__slide_2_full flex w-full flex-col items-center justify-center space-y-3 p-8">
          <div className="slide_2__title flex items-center gap-2">
            <span className="block rounded-full bg-gray-700 p-0.5">
              <BoltIcon className="h-3 w-3 stroke-current stroke-[0.5] text-theme-purple-100" />
            </span>
            <span className="text-[14px] font-medium tracking-wide text-gray-700">
              About {calcUserFirstName(user?.name)}
            </span>
          </div>

          <div className="slide_2__body flex flex-col items-center gap-6">
            <div className="body__about text-lg font-medium">{user?.bio}</div>
            <div className="body__basics flex w-[40rem] flex-wrap justify-center gap-1.5 gap-y-3">
              {userBasicsObj.map((item) => {
                return (
                  item.value && (
                    <div
                      key={item?.id}
                      className="flex items-center gap-2 rounded-full bg-theme-purple/30 px-4 py-1 text-sm font-medium"
                    >
                      <span className="icon block">
                        {
                          <item.icon className="h-[14px] w-[14px] text-gray-700" />
                        }
                      </span>
                      {item?.value}
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {user?.images?.length > 2 || user?.prompts?.length >= 1 ? (
        <DynamicSlides images={user?.images} prompts={user?.prompts} />
      ) : null}

      <div
        className={`showcase__slide_L ${
          cursorAboveHalf ? "cursor-up" : "cursor-null"
        } flex h-full snap-start`}
      >
        <div className="showcase__slide_L__left h-full w-1/2">
          <img
            src={
              user?.images.length > 2
                ? user?.images[0]
                : user?.images.slice(-1)[0]
            }
            className="h-full w-full object-cover"
          />
        </div>
        <div className="showcase__slide_L__right flex w-1/2 flex-col items-center justify-center space-y-3 px-8">
          <div className="slide_L__title flex items-center gap-2">
            <span className="block rounded-full bg-gray-700 p-0.5">
              <GlobeAmericasIcon className="h-3 w-3 stroke-current stroke-[0.5] text-theme-purple-100" />
            </span>
            <span className="text-[14px] font-medium tracking-wide text-gray-700">
              {`${calcUserFirstName(user?.name)}'s Location`}
            </span>
          </div>
          <div className="slide_L__body text-lg font-medium">
            {user?.location_current}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
