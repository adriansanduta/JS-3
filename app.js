// 1. Show rating
// Given a rating, display a star (*) for each full rating and a full-stop(.) for each half rating
//1.1
function showRating(rating) {
  let ratings = "";
  for (let i = 0; i < rating; ++i) {
    if (i === rating - 1) {
        ratings = ratings + "*"
    }
    else {
        ratings = ratings + "* "
    }
  }
  return ratings;
}
console.log(showRating(4));

// 1.2
function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < rating; ++i) {
      ratings = ratings + "*"
      if (i !== rating - 1) {
        ratings = ratings + " "
      }
    }
    return ratings;
  }
  console.log(showRating(4));

  // 1.3
  function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
      ratings = ratings + "*"
      if (i !== Math.floor(rating) - 1) {
        ratings = ratings + " "
      }
    }
    return ratings;
  }
  console.log(showRating(4));

  // 1.4
  function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
      ratings += "*"
      if (i !== Math.floor(rating) - 1) {
        ratings += " "
      }
    }
    if (!Number.isInteger(rating)) {
        ratings += " .";
    }
    return ratings;
  }
  console.log(showRating(4.5));
