
var friendsData = require("../data/friends");
// ========================================;=======================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function(req, res) {
       
      //if (req.body.length < 5) {
        console.log(req.body)
          friendsData.push(req.body);
      //compairing the socres and athen retruning the friend that matchses mot with res.json(whatever)
          friendsData,
          
          
          
          
          res.json(req.body.scores);
    //}
    
      });
    
    //Clear Answers
    
    //   app.post("/api/clear", function(req, res) {
    //     // Empty out the arrays of data
    //     tableData.length = [];
    //     waitListData.length = [];
    
    //     res.json({ ok: true });
    //   });
    // };
    


    }