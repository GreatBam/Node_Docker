fetch("http://localhost:3000/api/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("An error occurred:", error));
