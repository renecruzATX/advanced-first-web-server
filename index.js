let express = require("express");

const app = express();

app.use(express.static('public'));

let users = require("./state").users;

app.use(function(request,response,next){
    
    if(request.path === "/user"){
        return response.send(users);
    }else{
        return response.send("Blah Blah BLah")
    }

});

 




app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});
