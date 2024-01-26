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
app.get("/", async (req, res) => {
  // table batw data nikalnu paryo
  // blogs vannay table batw vaye jati sabai data day vanayko
  const allBlogs = await blogs.findAll(); // mongodb ma .find() vannay hunxa
  console.log(allBlogs);

  // blogs vannay key/name ma allBlogs/data pass garayko ejs FILE ma
  res.render("blogs", { blogs: allBlogs });
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
  // res.send("Form Submitted Successfully");
  res.redirect("/");
});

//single blog page
app.get("/single/:id", async (req, res) => {
  // first approach
  // console.log(req.params.id);
  // const id = req.params.id;

  // second approach
  const { id } = req.params;

  //id ko data magnu/ find garnu paryo hamro table bata
  const blog = await blogs.findAll({
    where: {
      id: id,
    },
  });

  // second finding approach
  // const blog = await blogs.findByPk(id);

  console.log(blog);

  res.render("singleBlog", { blog: blog });
});

// delete blog
app.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await blogs.destroy({
    where: {
      id: id,
    },
  });
  res.redirect("/");
  // res.send("delete");
});

// EDIT blog

app.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
  // find blog of that id
  const blog = await blogs.findAll({
    where: {
      id: id,
    },
  });
  res.render("editBlog", { blog: blog });
});

app.post("/editBlog/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  //Nagarnay Approach loopholes haru dhereai aauxa
  // blogs.update(req.body, {
  //   where: {
  //     id: id,
  //   },
  // });
  const title = req.body.title;
  const subTitle = req.body.subtitle;
  const description = req.body.description;
  blogs.update(
    {
      title: title,
      subTitle: subTitle,
      description: description,
    },
    {
      where: {
        id: id,
      },
    }
  );
  res.redirect("/single/" + id);
});

app.listen(3000, () => {
  console.log("Node is Running on port 3000");
});
