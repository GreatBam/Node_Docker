# Node_Docker

## installation

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

Now, you will have to change the file in the "db" folder :

```bash
init.sql
```

Do the necessary changes to create your database.

You can skip this by commenting or deleting the 28st line in the docker-compose.yml file :

```bash
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

Follow the format of the already existing route :

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

This will allow you to interacte with the database from your website.

Feel free to add new method in the Database class if needed.

It is possible to see db logs in the docker container directly, so for debugging, use "console.log" and the result will be returned in the docker terminal.

## Credit

Jonathan Gabioud