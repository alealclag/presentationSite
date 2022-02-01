//Spin profile picture

var profilePic = $(".profilePic");
var spinProfilePic = false; //Flag for when mouse over profile pic
var keepSpinProfilePic = false; //Flag for when clicked profile pic
var profilePicMusic = new Audio("audio/profilePic_music.mp3");
profilePicMusic.loop = true;
var firstTip = true;

profilePic.click(function () {
  spinProfilePic = !spinProfilePic;
  if (spinProfilePic) {
    $("#playTip").fadeOut(); //Hide hover Tip

    if (firstTip) {
      firstTip = false;
      $("#pauseTip").fadeIn(); //Hide button text
    }
  } else {
    spinProfilePic = false;
    $("#pauseTip").fadeOut(); //Hide button text
  }
});

rotate(0);
function rotate(degree) {
  //If mouse is over or was clicked, play.
  if (spinProfilePic || keepSpinProfilePic) {
    // For webkit browsers: e.g. Chrome
    profilePic.css({ WebkitTransform: "rotate(" + degree + "deg)" });
    // For Mozilla browser: e.g. Firefox
    profilePic.css({ "-moz-transform": "rotate(" + degree + "deg)" });

    degree++;
    profilePicMusic.play();
  } else {
    profilePicMusic.pause();
  }
  // Animate rotation with a recursive call
  setTimeout(function () {
    rotate(degree);
  }, 30);
}

// Form Button Animation
$(".sendMessageBtn").click(function () {
  var sendCharm = new Audio("audio/formSent.mp3");
  sendCharm.play();
  $(".sendMessageBtn").attr("disabled", "true"); //Disable button
  $(".sendMessageBtn").animate(
    {
      borderRadius: "100%",
      width: "60px",
      height: "60px",
      padding: 0,
    },
    100,
    "linear"
  ); //Make button round

  $(".sendFormText").css("display", "none"); //Hide button text
  $(".sendMessageBtn i").removeClass("invisibility"); //Show check on button
});