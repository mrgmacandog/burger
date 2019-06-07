# Eat-Da-Burger

https://eat-da-burger-mrgm.herokuapp.com/

This is an app that allows a user to add burgers to a database, modify records of burgers in the database by "devouring" it, and updating the page accordingly. Although it is a simple app, it utilizes both front-end and back-end technologies that create a full-stack web application.

---

## Setup
Follow these 3 steps before using the app:
1. Install all package dependencies using the node command `npm install`.

2. Create a `.env` file that includes your MySQL Root Password without any quotes. It should look like the following:
    ```
    # MySQL Root Password

    ROOT_PASSWORD=your-password
    ```

3. Set up the database with `schema.sql` and use `seeds.sql` to populate it.

---

## Implementation

### Node
- Running JavaScript on the backend
- Ability to use code snippets from other packages

### Express
- Framework for setting up a server
- Routing
- Initiate listening of server
- Decode POST method body

### Handlebars
- HTML Templating

### MySQL
- Database for all the burger information
- Utilize ORM to perform CRUD operations in the database

### API

| HTTP Method | Route | Return Type | Purpose |
| ----------- | ----- | ----------- | ------- |
| GET | / | HTML page | Direct to home page of the app |
| POST | /api/burgers | JSON | Add a burger to the database |
| PUT | /api/burgers/:id | JSON | Change burger status from "Ready to Eat" to "Devoured"  |

### Bootstrap
- Layout
- Form
- Custom CSS

### jQuery
- Get burger name for text input
- Use `.ajax` method to call API

---

## Package Dependencies

| Package | Purpose |
| ------- | ------- |
| [dotenv](https://www.npmjs.com/package/dotenv) | Loads environment variables from a .env file into process.env |
| [express](https://www.npmjs.com/package/express) | Node.js framework for creating a server |
| [express-handlebars](https://www.npmjs.com/package/express-handlebars) | Handlebars view engine for Express |
| [mysql](https://www.npmjs.com/package/mysql) | Node.js driver for MySQL  |