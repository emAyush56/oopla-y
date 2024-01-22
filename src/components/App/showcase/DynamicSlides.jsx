import { generateDynamicSlides } from "@/utils/slidesUtils";

function DynamicSlides({ images, prompts }) {
  const imagesCopy = [...images];

  imagesCopy.shift();

  const dynamicSlides = generateDynamicSlides(prompts, imagesCopy);

  return (
    <>
      {dynamicSlides.map((slide, id) => {
        return slide.type === "halfSlide" ? (
          <HalfSlide
            key={id}
            dataLeft={slide.leftData}
            dataRight={slide.rightData}
          />
        ) : (
          <FullSlide
            key={id}
            type={slide.data instanceof Object ? "text" : "img"}
            data={slide.data}
          />
        );
      })}
    </>
  );
}

function HalfSlide({ type, dataLeft, dataRight }) {
  if (type === "img-img") {
    return (
      <div className="half_slide flex h-full snap-start">
        <div className="half_slide__left w-1/2">
          <SlideImage />
        </div>
        <div className="half_slide__right w-1/2">
          <SlideImage />
        </div>
      </div>
    );
  }

  if (type === "text-text") {
    return (
      <div className="half_slide flex h-full snap-start">
        <div className="half_slide__left w-1/2">
          <SlideContent />
        </div>
        <div className="half_slide__right w-1/2">
          <SlideContent />
        </div>
      </div>
    );
  }

  return (
    <div className="half_slide flex h-full snap-start">
      <div className="half_slide__left w-1/2">
        <SlideImage src={dataLeft} />
      </div>
      <div className="half_slide__right w-1/2">
        <SlideContent data={dataRight} />
      </div>
    </div>
  );
}

function FullSlide({ type, data }) {
  return (
    <div className="flex h-full snap-start">
      {type === "text" ? (
        <SlideContent data={data} />
      ) : (
        <SlideImage src={data} />
      )}
    </div>
  );
}

function SlideImage({ src }) {
  return <img src={src} className="h-full w-full object-cover" />;
}

function SlideContent({ data }) {
  return (
    <div className="wrapper flex h-full w-full flex-col items-center justify-center space-y-3 px-8">
      <div className="title flex items-center gap-2">
        <span className="text-[14px] font-medium tracking-wide text-gray-700">
          {data?.prompt_title}
        </span>
      </div>
      <div className="body text-center text-lg font-medium">
        {data?.prompt_body}
      </div>
    </div>
  );
}

export default DynamicSlides;
