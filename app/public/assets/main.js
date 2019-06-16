// auto inits all materialize javascripts
M.AutoInit();

$("#modal-btn").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

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
  var scores = [group1Val, group2Val, group3Val, group4Val, group5Val, group6Val, group7Val, group8Val, group9Val, group10Val];

  // [name=plan] will find an element with a "name" attribute equal to the string "plan"
  var newFriend = {
    first_name: $("#survey_form [name=first_name]").val().trim(),
    last_name: $("#survey_form [name=last_name]").val().trim(),
    email: $("#survey_form [name=email]").val().trim(),
    url_link: $("#survey_form [name=url_link]").val().trim(),
    score: scores
  };

  // Send the POST request.
  $.ajax("/api/friends", {
    type: "POST",
    data: newFriend
  }).then(
    function () {
      //  runs get request to populate the match closest to the sent question total
      console.log("added new friend");
      console.log(res);
      if (res.length === 0) {
        $('#friend_first_name').text("first name: No");
        $('#friend_last_name').text("last name: Friend");
        $('#friend_email').text("email: foryou@here.com");
        $('#friend_image').attr("src", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d7b3952736003.591b008d30b88.png");
      }
      $('#friend_first_name').text("first name: " + res.first_name);
      $('#friend_last_name').text("last name: " + res.last_name);
      $('#friend_email').text("email: " + res.email);
      $('#friend_image').attr("src", res.url_link);
    }
  );
});