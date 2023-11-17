import getElement from "./getElement";

export function handleClick(identifier, callback) {
  const element = getElement(identifier);
  element.addEventListener("click",callback);
}
