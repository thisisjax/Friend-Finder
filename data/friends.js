var friends = [];

$("#submit-survey").on("click", function(event) {
    event.preventDefault();
    var newFriends = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
     
    };

    // // Question: What does this code do??
    // $.post("/api/friends", newFriends)
    //   .then(function(data) {
    //     console.log("friends.js", data);
        
    //   });
  });