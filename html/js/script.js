const addUserButton = document.getElementById("addUserButton");

fetch("http://localhost:3000/api/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("An error occurred:", error));

async function addUser(name, lastname, dob) {
  const url = "http://localhost:3000/api/adduser";

  const userData = {
    name: name,
    lastname: lastname,
    dob: dob,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    const result = await response.json();
    console.log("User added successfully!", result);
  } else {
    console.log("Failed to add user");
  }
}

addUserButton.onclick = () => {
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const dob = document.getElementById("dob").value;
  addUser(name, lastname, dob);
};
