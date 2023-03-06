# save API method :

## with save method, we can insert / update complex relations.

### for exemple to insert a client

### (we suppose here that client's entity got only one column which is called 'name')

## so for insert we pass to the /save API this body :

### EX : {name : "client 1"}

## for update, we call the same API but this time we pass the id client to update in the body

### EX : {id : 1,name : "updated name"}

## for many to one relations, u can only precise the foreign key OR update both entity in once

### Exemple with projet entity which is on a ManyToOne relation with client.

### EX : @Column()

### clientId : number;

### @ManyToOne(()=>client, client => client.id,{nullable : false,cascade : true, onDelete : "CASCADE"})

### @JoinColumn({name : "clientId"})

## for simple link between project and client, you give this body to save API :

### {

### "id" : 1,

### "clientId" : 2

### }

## OR u can add a link and edit client in the same time

### EX :

### {

### "id": 8,

### "name": "projet1",

### "client": {

### "id" : 3,

### "name" : "client name updated"

### }

### }

## last but not least, u can use save for a mass insert / update

### like this example [{"name":"admin"},{"name":"player"}]

### for this, send an array as body. rules are the same than before

## SAVE a MANY TO MANY relation

### for exemple a user which is on a many to many relation with "role" table:

### @ManyToMany(()=>role)

### @JoinTable()

### role : role[]

## for insert a user with role id = 1,2 and 3

### EX body : {

### "name" : "userTest",

### "role" : [1,2,3]

### }

## for update same thing with id

### EX body : { "id" :1,

### "name" : "userTest",

### "role" : [1]

### }
