var friendsArr = require("../data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsArr);
  });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    var userScore = req.body.score;
    var bestMatch = {
      first_name: "",
      last_name: "",
      url_link: "",
      email: "",
      friendDifference: Infinity
    };

    for (let i = 0; i < friendsArr.length; i++) {
      // find difference betweeen current friend and user
      // if difference is less than current difference make current friend bestMatch
      let currentFriend = friendsArr[i];
      let totalDifference = Math.abs(parseInt(currentFriend.score) - parseInt(userScore));
      console.log(totalDifference);

      if (totalDifference < bestMatch.friendDifference) {
        bestMatch.first_name = currentFriend.first_name;
        bestMatch.last_name = currentFriend.last_name;
        bestMatch.url_link = currentFriend.url_link;
        bestMatch.email = currentFriend.email;
      }
    };
    console.log(bestMatch);

    friendsArr.push(newFriend);

    res.json(bestMatch);

  });
};