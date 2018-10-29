let express = require("express");
let bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use(express.static('public'));

let users = require("./state").users;
let counter = 10;

//Part 4-1
app.get("/users/:userId",function (req,res,next){
    res.json(users[req.params.userId]);
});

//Part 4-2
app.put('/users/:userId', (req, res, next) => {
    users[req.params.userId].occupation = "Stay at home Astronaut";

    res.json(users[req.params.userId]);
});  

//Part 4-3
app.delete('/users/:userId', (req, res, next) => {
    users[req.params.userId]["isActive"] = false;
    return res.send("deleted");
});
   
//Part 3
app.post("/users",function(req,res, next){

    users.push(req.body);
    users[users.length-1]._id = counter ++;  
    console.log(req);
    return res.json(users[users.length-1]);
 });
 
app.get("/users", function(req, res, next)
{
    return res.json(users);
});

app.get("/users/1", function(req, res, next)
{
    return res.json(users[0]);
});

app.post("/users", function(req, res, next)
{
    users.push({
        _id: 6,
        name: "Rene",
        occupation: "Driver"
    })
    return res.json(users[users.length-1]);
});

app.put("/users/1", function(req, res, next)
{
    users[0].name = "Ted";
    return res.json(users[0]);
});
app.delete("/users/1", function(req, res, next)
{
    users.splice(0,1)
    return res.send("Deleted!");
});

app.use(function(req, res, next)
{
    return res.send("Blah Blah Blah");
});

 



app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});
