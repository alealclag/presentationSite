var profilePic = $(".profilePic");
var spinProfilePic = false; //Flag for when mouse over profile pic
var profilePicMusic = new Audio("audio/profilePic_music.mp3");
profilePicMusic.loop = true;
var firstTip = true;
var smallDevice = window.matchMedia("(max-width: 768px)");

function rotate(degree) {
  //If mouse is over or was clicked, play.
  if (spinProfilePic) {
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

//If the profile pic is clicked, the displayed tip and the music will change
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

// Form Button Animation
$("#contactForm").submit(function (e) {
  var sendCharm = new Audio("audio/formSent.mp3");
  sendCharm.play();
  $(".sendMessageBtn").css("pointer-events", "none"); //Disable button
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

  $("#contactForm").trigger("reset"); //Clear form's fields
});

//Check if device is touchable (or small, which usually means it's touchable)
if (
  smallDevice.matches ||
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0
) {
  $("#playTipText").text("Tap on me for a comfy experience!");
}

rotate(0);
