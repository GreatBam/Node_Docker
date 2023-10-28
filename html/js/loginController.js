const addUserButton = document.getElementById("addUserButton");
const signupButton = document.getElementById("signupButton");
const siginButton = document.getElementById("siginButton");

fetch("http://localhost:3000/api/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("An error occurred:", error));

async function addAccount(name, lastname, dob, mail, password) {
  const url = "http://localhost:3000/api/signup";

  const userData = {
    name: name,
    lastname: lastname,
    dob: dob,
    mail: mail,
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

async function Login(mail, password) {
  const url = "http://localhost:3000/api/signin";

  const userData = {
    mail: mail,
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
    console.log("Successfully loged in!", result);
    window.location.href = "http://localhost:3000/web/home.html";
  } else {
    console.log("Failed to add user");
  }
}

signupButton.onclick = () => {
  const username = document.getElementById("username").value;
  const userlastname = document.getElementById("userlastname").value;
  const userdob = document.getElementById("userdob").value;
  const email = document.getElementById("mailup").value;
  const password = document.getElementById("passwdup").value;
  addAccount(username, userlastname, userdob, email, password);
};

siginButton.onclick = () => {
  const email = document.getElementById("mailin").value;
  const password = document.getElementById("passwdin").value;
  Login(email, password);
};
