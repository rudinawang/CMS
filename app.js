const express = require("express");
const { blogs } = require("./model/index");
const app = express();

// database Connection
require("./model/index");

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
app.post("/createBlog", async (req, res) => {
  // first Approach
  const title = req.body.title;
  const description = req.body.description;
  const subTitle = req.body.subtitle;
  // Second Approach
  // const { title, description, subTitle } = req.body;
  console.log(title, subTitle, description);
  console.log(req.body);

  // database ma halnu paryo hae
  await blogs.create({
    title: title,
    subTitle: subTitle,
    description: description,
  });
  res.send("Form Submitted Successfully");
});

app.listen(3000, () => {
  console.log("Node is Running on port 3000");
});
