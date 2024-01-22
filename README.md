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
