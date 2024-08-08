// Data fetching in JavaScript !

// Fetching withouth async await

fetch("URL")
  .then((res) => res.json())
  .catch((err) => console.log(err));

// Async Await

export const getData = async () => {
  try {
    const response = await fetch("URL");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
