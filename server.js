// npm install express

const express = require("express");
const app = express();

app.get("/",function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/user_data",function(req,res) {
    // req.query displays the data entered by user.
    var user_name = "NULL";
    if(req.query.password1 !== req.query.password2) {
        res.send("Enter same passwords in both dialogue boxes.")
    }
    else if(req.query.password1.length < 8) {
        res.send("The password entered by you is too weak.")
    }
    else {
        user_name = req.query.first_name.toLocaleLowerCase() + req.query.last_name.toLocaleLowerCase() + String(Math.floor(Math.random()*100));
        var output="";
        output+= "Full name: " + req.query.first_name + req.query.middle_name + req.query.last_name + "\n";
        output+= "Date of birth: " + String(req.query.DOB) + "\n";
        output+= "Contact number: " + String(req.query.phone) + "\n";
        output+= "E-mail address: " + req.query.email + "\n";
        output+= "Username: " + user_name + "\n";
        res.send(output);
    }
    console.log(req.query);
    console.log(user_name);
});

app.listen(3000,function() {
    console.log("Server started at port 3000.");
});