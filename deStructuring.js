const bookDetails = {
  id: 1,
  title: "Age of Author",
  ratings: 4.5,
  ratingsCount: 1234,
  read: "Yes U can",
};

const { id, title, ...other } = bookDetails;
console.log(title);
console.log(id);

const arr = ["Simple Way", "Hard Way", "Wayyy", "Another Array", "dot"];

const [simple, hard, ...res] = arr;
console.log(simple);
console.log(hard);

res.map((item) => {
  console.log(item);
});

const newArray = [...arr, "Epic Fantasy"];

const updateBook = {
  ...bookDetails,
  PubDate: "2001-9-03",
  pages: 1210,
};

console.log(updateBook);
