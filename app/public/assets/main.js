$("#modal-btn").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  // gets all survey values
  var group1Val = parseInt($("input[name='group1']:checked").val());
  var group2Val = parseInt($("input[name='group2']:checked").val());
  var group3Val = parseInt($("input[name='group3']:checked").val());
  var group4Val = parseInt($("input[name='group4']:checked").val());
  var group5Val = parseInt($("input[name='group5']:checked").val());
  var group6Val = parseInt($("input[name='group6']:checked").val());
  var group7Val = parseInt($("input[name='group7']:checked").val());
  var group8Val = parseInt($("input[name='group8']:checked").val());
  var group9Val = parseInt($("input[name='group9']:checked").val());
  var group10Val = parseInt($("input[name='group10']:checked").val());
  var userScore = group1Val + group2Val + group3Val + group4Val + group5Val + group6Val + group7Val + group8Val + group9Val + group10Val;

  // [name=plan] will find an element with a "name" attribute equal to the string "plan"
  var newFriend = {
    first_name: $("#survey_form [name=first_name]").val().trim(),
    last_name: $("#survey_form [name=last_name]").val().trim(),
    email: $("#survey_form [name=email]").val().trim(),
    url_link: $("#survey_form [name=url_link]").val().trim(),
    score: userScore
  };

  // Send the POST request.
  $.post("/api/friends", newFriend, function(res){
 
    console.log(res);

    $('#friend_first_name').html("first name: " + res.first_name);
    $('#friend_last_name').html("last name: " + res.last_name);
    $('#friend_email').html("email: " + res.email);
    $('#friend_image').attr("src", res.url_link);
  })
});