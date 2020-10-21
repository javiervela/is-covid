# MERN in IS-COVID

> GitHub repository: https://github.com/javiervela/is-covid

> See https://www.geeksforgeeks.org/mern-stack/

# File Structure

> See https://stackoverflow.com/questions/51126472/how-to-organise-file-structure-of-backend-and-frontend-in-mern

# NODEJS NPM

Install 'nodejs' 'npm'

`sudo npm install -g npm` to update npm

# React

creates a folder to itself, execute from root folder: `npm install -g create-react-app`

`create-react-app frontend` for creating react frontend folder

> Install all the needed modules as they are needed

# Express

`mkdir backend` in root project folder, `cd backend`

`npm init` init package.json project file

`npm i -g express mongoose`
`npm i bcrypt jsonwebtoken cors nodemailer` when is this necesary (?)

`npm i −D nodemon morgan` -D as devDependencies

creates `touch index.js` server main

add to 'package.json' commands 'dev' and 'start' :

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
```

to run scripts `npm run script_name`

added to 'index.js' :

```
const express = require('express')
const app = express()

app.use(express.json())
app.listen(3000, process.env.IP, () => {
    console.log('Server successfully started!');
});
```

# RUN frontend/backend

`cd backend`; `npm start` if 'express' not installed locally it asks for it `npm i express`

cd `frontend`; `npm start`
