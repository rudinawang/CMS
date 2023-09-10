const express = require("express");
const app = express();

app.set("view engine", "ejs");

// front-end batw back-end ma data aauna lai handle garayko xa
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All Blogs
app.get("/", (req, res) => {
  res.render("blogs.ejs");
});

//createBlog
app.get("/createBlog", (req, res) => {
  res.render("createBlog.ejs");
});

// create Post
app.post("/createBlog", (req, res) => {
  console.log(req.body);
  res.send("<h1>Form Submitted Successfully</h1>");
});

app.listen(3000, () => {
  console.log("Node.JS project has started at port 3000");
});
