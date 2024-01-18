const express = require("express");
const app = express();

// tellling nodejs to set the env for view engine
app.set("view engine", "ejs");

// allBlogs
app.get("/", (req, res) => {
  res.render("blogs");
});

//createBlogs
app.get("/createBlog", (req, res) => {
  res.render("createBlog");
});

app.post("/createBlog", (req, res) => {
  console.log(req);
});

app.listen(3000, () => {
  console.log("Node is Running on port 3000");
});
