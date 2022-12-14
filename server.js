const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 8080;

const users = [];

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/frontend/dist/project"));

app.get('/newtest', (req, res) => {
  res.json("new test");
});

// app.post('/api/user', (req, res) => {
//   const user = req.body.user;
//   users.push(user);
//   res.json("user addedd");
// });

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/frontend/dist/project/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
