const addUserButton = document.getElementById("addUserButton");
const signupButton = document.getElementById("signupButton");
const siginButton = document.getElementById("siginButton");

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

async function addAccount(email, password) {
  const url = "http://localhost:3000/api/signup";

  const userData = {
    email: email,
    password: password,
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

async function Login(email, password) {
  const url = "http://localhost:3000/api/signin";

  const userData = {
    email: email,
    password: password,
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

// addUserButton.onclick = () => {
//   const name = document.getElementById("username").value;
//   const lastname = document.getElementById("userlastname").value;
//   const dob = document.getElementById("userdob").value;
//   addUser(name, lastname, dob);
// };

// signupButton.onclick = () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("passwd").value;
//   addAccount(email, password);
// };

siginButton.onclick = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("passwd").value;
  Login(email, password);
};