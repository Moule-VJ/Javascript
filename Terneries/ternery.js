const a = 10;
const pagesRange = a > 10000 ? "Over a thousand" : "less than 1000";

console.log(pagesRange);

// Short Circuting

// False Values = 0, "", null, undefined
const hasValue = "Yes it has";
const hasValueNum = 0;
console.log(true && "Some String");
console.log(false && "String Some");

console.log(hasValue && "The movie has the correct value");

console.log(0 && "Does it return false");
console.log(true || "Some String");
console.log(false || "Some String");

const nullish = hasValue ?? "Yep it had vale";
const nullish2 = hasValueNum ?? "it returns zero";

// Opiotnal Chainning

const movieReviews = {
  reviews: {
    goodReads: {
      rating: 4.24,
      ratingsCount: 8787,
      reviewsCount: 12345,
    },
    library: {
      publishedAt: 12345,
    },
  },
};

const getTotalReviewCount = (book) => {
  const goodRead =
    book.reviews.goodReads?.reviewsCount ?? "there is no rating count";
  return goodRead;
};

getTotalReviewCount(movieReviews);
