var friendsArr = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsArr);
  });

  app.post("/api/friends", function(req, res) {
    res.send(friendsArr.friendArray)
    // call function to compare codes where person equal
    friendsArr.friendArray.push(req.body);
    console.log(friendsArr.friendArray); 
  });
};