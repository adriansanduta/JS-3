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


  // 2.Sort by lowest to highest price
  // Given an array of numbers, return the prices sorted by low to high.
  function sortLowToHigh(arr) {
       return arr.sort((a, b) => a - b);
  }
  console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));

  // 3.Sort by highest to lowest price
  // Given an array of objects, return the prices sorted by high to low
  function sortHighToLow(numbers) {
    return numbers.sort((a, b) => b.price - a.price);
}
console.log(sortHighToLow([{ id: 1, price: 20}, {id: 2, price: 40}, {id: 3, price: 30}]));

// Promises and API
// 4. Find all the posts by a single user
// Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user Id
async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await promise.json();
    const posts = result.filter(element => element.userId === userId);
    console.log(posts);
}
postsByUser(4);


