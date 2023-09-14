const express = require("express");
const { blogs } = require("./model/index");
const app = express();

// Database Connection
require("./model/index");

// telling Node.js to set view-engine for "ejs"
app.set("view engine", "ejs");

// front-end batw back-end ma data aauna lai handle garayko xa
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All Blogs
app.get("/", async (req, res) => {
  // table batw data nikalnu paryo
  // blogs vannay table batw vaye jati ko data day vanayrw vanayko
  const allBlogs = await blogs.findAll();
  console.log(allBlogs);
  res.render("blogs.ejs");
});

//createBlog
app.get("/createBlog", (req, res) => {
  res.render("createBlog.ejs");
});

// create Post
app.post("/createBlog", async (req, res) => {
  // First Approach
  const title = req.body.title;
  const description = req.body.description;
  const subTitle = req.body.subtitle;

  // Second Approach
  // const {title, subTitle, description}= req.body

  console.log(title, subTitle, description);

  // Database ma halnu paryo hai tw
  // agadi, await halaypaxi mathi async halnu parnay hunxa hai
  await blogs.create({
    title: title,
    subTitle: subTitle,
    description: description,
  });

  res.redirect("/");
});

// Database ko table batw data kasari nikalnay

app.listen(3000, () => {
  console.log("Node.JS project has started at port 3000");
});
