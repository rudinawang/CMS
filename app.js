const express = require("express");
const app = express();

// tellling nodejs to set the env for view engine
app.set("view engine", "ejs");

// form batw data aiirako xa tyo data lai yauta format dey oni handle garayrw tyo data lai backend ma liyerw aaijo vanayko
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// allBlogs
app.get("/", (req, res) => {
  res.render("blogs");
});

//createBlogs
app.get("/createBlog", (req, res) => {
  res.render("createBlog");
});

//createBlog Post
app.post("/createBlog", (req, res) => {
  console.log(req.body.title);
  res.send("Form Submitted Successfully");
});

app.listen(3000, () => {
  console.log("Node is Running on port 3000");
});
