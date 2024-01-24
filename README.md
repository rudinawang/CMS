# CMS

### (http verbs)

POST -> Kei kura Create garnu paryoo/halnu paryoo database ma vanay POST method use garnay

GET -> kei kura magnu paryoo database batw/dekhaunu paryoo browser ma vanay

PATCH/PUT -> Update garda

DELETE -> delete hannu parda

### Package Install garnu parxa SQL database ma connect garna

1. sequelize (ORM)
2. mysql2 (database)

   sql variation -> mysql, postgresql, sqlite

   "user" -> in database ma "users" hunxa,
   "product" -> in database ma "products" hunxa hai,

   string => a-z , A-Z aayo vanay tyo string ho hai,

### De-Structuring Property

// req.body ma sabai data haru aaunay garxa
req.body = {title: "hello", subtitle: "hello1", description: "hello2"} ,

const title = req.body.title;
const subtitle = req. body.subtitle;
const description = req.body.description;

const {titl, subtitle, description} = req.body;

### SQL (RAW QUERY) commands;

INSERT INTO BLOGS(title, subtitle, description) VALUES('hello', 'hello1', 'hello2')
SELECT \* FROM BLOGS
DELETE FROM BLOGS WHERE ID = ?

### SEQUELIZE(ORM--> OBJECT RELATIONAL MAPPING)

SELECT \* FROM BLOGS ==> BLOGS.find()
INSERT INTO BLOGS(title, subtitle, description) VALUES('hello', 'hello1', 'hello2') ==> BLOGS.create({title: "hello", subtitle: "hello1"})

halnu parnay xa vanay -> .create() method lai call garxum

database batw nikalayrw dekhaunu parnay xa vanay ->
.find() method lai call garxum

### Single Page selection

8 nikalnu paryo
blogs table ma query/search, where id ==8
SELECT \* FROM blogs WHERE ID '8' == blogs.findAll({
where: {
id:req.params.id
}
})
// findAll lay array of objects dinxa haii

blog = [ {
id: 3,
title: 'ban',
subTitle: 'ban1',
description: 'ban2',
createdAt: 2024-01-24T07:48:18.000Z,
updatedAt: 2024-01-24T07:48:18.000Z
}
]

blog[0].title
blog[0].subtitle

// findByPk lay object matrai dinxa haii

blog = {
id: 3,
title: 'ban',
subTitle: 'ban1',
description: 'ban2',
createdAt: 2024-01-24T07:48:18.000Z,
updatedAt: 2024-01-24T07:48:18.000Z
}

blog[0].title
blog[0].subtitle
