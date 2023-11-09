import starIcon from "/star.svg";
import halfStarIcon from "/half-star.svg";

function getStars(rating) {
  const rest = rating % 1;
  const iRating = Number.parseInt(rating);
  const stars = [];
  let cont = 0;

  for (; cont < iRating; cont++) {
    stars.push(100);
  }

  if (rest != 0) {
    cont++;
    stars.push(50);
  }

  for (; cont < 5; cont++) {
    stars.push(0);
  }

  console.log(rating, stars);

  return stars;
}

function getSpans(stars) {
  const spans = [];

  for (const star of stars) {
    spans.push(`<span class="${star==50 ? 'half-star' : ''}">${star ? "★" : "☆"}</span>`);
  }

  return spans.join("");
}

export default function Rating(rating) {
  const stars = getStars(rating);
  const spans = getSpans(stars);

  return `
    <span value="${rating}" styles="width:50%">
        ${spans}
    </span>
`;
}
