export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.substr(1);

export const firstCharLower = (text: string) => text.charAt(0).toLowerCase() + text.substr(1);

export const makeSingularandCapitalize = (text: string) => {
  return text.substr(0, text.length - 1).toUpperCase();
}