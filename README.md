# Node_Docker

This repo give you a full environnement with nginx http server, node backend and a database.

You can then retrieve data with node API for the frontend.

## installation

### Environnement files

Clone the repo on your computer.

First, you'll need to add the .env files.

The first have to be placed on the root directory.

Use th following format :

```bash
MYSQL_DATABASE={your database name}
MYSQL_USER={your username}
MYSQL_PASSWORD={your password}
MYSQL_ROOT_PASSWORD={root password}
```

Once this is done, you will have to create a second one in the "node" folder.

Use the following format this time :

```bash
DB_HOST=db # don't change this value
DB_USER={same username as previous}
DB_PASSWORD={same password as previous}
DB_DATABASE={The name you previously give to your database}
```

### Database init.sql file

Now, you will have to change the init.sql file in the "db" folder :

```sql
CREATE DATABASE IF NOT EXISTS {your database name};
USE {your database name};
```

Do the necessary changes to fit with your needs, by default a t_users table will be created with one entry :

```sql
CREATE TABLE `Data`.`t_users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NOT NULL,
  `userLastname` VARCHAR(255) NOT NULL,
  `userDob` DATE NOT NULL,
  PRIMARY KEY (`idUser`));

INSERT INTO t_users (idUser, userName, userLastname, userDob)
VALUES (1, 'Jonathan', 'Gabioud', '1987-12-28');

```

You can also skip this by commenting or deleting the 28st line in the docker-compose.yml file :

```yml
- ./db:/docker-entrypoint-initdb.d
```

## Usage

Once everythink is running, you can create and use your website.

To see the result, go to the next url :

```bash
http://localhost:8080
```

You will see your "index.html" file displayed.

You can use the "app.js" file in node directory to create new routes.

### GET method

There is already an existing route for GET method :

```javascript
app.get("/api/data", async (req, res) => {
  try {
    const result = await connection.query("SELECT * FROM t_users");
    let parsedResult = JSON.parse(result);
    console.log(parsedResult);
    res.json(parsedResult);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});
```

This will allow you to interacte with the database from your website to get data.

It is possible to see db logs in the docker container directly, so for debugging, use "console.log" and the result will be returned in the docker terminal.

in the previous code for routes for exemple :

```javascript
console.log(parsedResult);
```

### GET method with arguments

A GET route to fetch specific data using url data is also already present as exemple :

```javascript
app.get("/api/data/:idUser", async (req, res) => {
  try {
    const userId = req.params.idUser;
    const query = `SELECT * FROM t_users WHERE idUser=${userId}`;
    const result = await connection.query(query);
    let parsedResult = JSON.parse(result);
    res.json(parsedResult);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});
```

### POST method

You can also insert data in the database with the POST action route :

```javascript
app.post("/api/adduser", async (req, res) => {
  const { name, lastname, dob } = req.body;

  if (!name || !lastname || !dob) {
    return res
      .status(400)
      .json({ error: "Name, lastname and DOB are required" });
  }

  const addUserQuery = `INSERT INTO t_users (userName, userLastname, userDob) VALUES ('${name}', '${lastname}', '${dob}')`;

  try {
    await connection.query(addUserQuery);
    res.json({ message: "User added successfully!" });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});
```

Change the last code part, or add new routes to insert other data in the database.

Feel free to add new method in the Database class as well if needed.

## Credit

Jonathan Gabioud
