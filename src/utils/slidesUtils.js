export function generateDynamicSlides(prompts = [], photos = []) {
  let slides = [];

  for (let i = 0; i < Math.max(photos?.length, prompts?.length); i++) {
    if (i < photos.length && i < prompts.length) {
      slides.push({
        type: "halfSlide",
        leftData: photos[i],
        rightData: prompts[i],
      });
    } else if (i < photos?.length) {
      slides.push({
        type: "fullSlide",
        data: photos[i],
      });
    } else if (i < prompts?.length) {
      slides.push({
        type: "fullSlide",
        data: prompts[i],
      });
    }
  }

  function alternateSlides(inputArray) {
    const halfSlides = inputArray.filter((item) => item.type === "halfSlide");
    const fullSlides = inputArray.filter((item) => item.type === "fullSlide");
    const result = [];

    const maxLength = Math.max(halfSlides.length, fullSlides.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < halfSlides.length) {
        result.push(halfSlides[i]);
      }
      if (i < fullSlides.length) {
        result.push(fullSlides[i]);
      }
    }

    return result;
  }

  return alternateSlides(slides);
}
