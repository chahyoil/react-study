// utils.js
export function getImageUrl(person, size = 's') {
  if(person.imageSize == undefined) person.imageSize = size
  return `https://i.imgur.com/${person.imageId}${person.imageSize}.jpg`;
  }