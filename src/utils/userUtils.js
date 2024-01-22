export function calcAge(dob) {
  const birthDateObj = new Date(dob);
  const today = new Date();

  let ageInMillis = today - birthDateObj;

  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const ageInYears = Math.floor(ageInMillis / millisecondsPerYear);

  return ageInYears;
}

export function calcUserFirstName(fullName, toLower = false) {
  if (toLower) return fullName?.split(" ")[0].toLowerCase();
  return fullName?.split(" ")[0];
}

export function calcPromptsLength(prompts) {
  let length = 0;
  for (let i = 0; i < 3; i++) if (prompts[i]?.prompt_title) length++;
  return length;
}

export function doCapitalizeFirstChar(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}
