var data = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(data);
  });

  app.post("/api/friends", function(req, res) {
    let personScores = req.body.scores;
    for(let i = 0; i < data.friendArray.length; i++){
        for(let g = 0; g < data.friendArray.length; g++){
            if(personScores[g] === data.friendArray[i].scores[g]){
                res.send(data.friendArray[i]);
            };
        };
        if(i === data.friendArray.length){
            res.send({});
        }
    }
    // call function to compare codes where person equal
    data.friendArray.push(req.body);
    console.log(data.friendArray); 
  });
};