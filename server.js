const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3080;

const app = express();

app.use(express.static(path.join(__dirname, "")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("get request");
  res.send("/index.html");
});



app.post("/user-profile", (req, res) => {
  console.log(req.body);
//   res.redirect(`Your username is ${req.body.username}`);
});

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
