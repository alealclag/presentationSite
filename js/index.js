// Form Button Animation
document
  .querySelector(".sendMessageBtn")
  .addEventListener("click", function () {
    var sendCharm = new Audio("audio/formSent.mp3");
    sendCharm.play();
    document.querySelector(".sendMessageBtn").classList.add("sentSuccess");
    document.querySelector(".sendMessageBtn").setAttribute("disabled", "true");
    document.querySelector(".sendFormText").classList.add("invisibility");
    document
      .querySelector(".sendMessageBtn i")
      .classList.remove("invisibility");
  });

// var i = 0;
// while (i < 360) {
//   setTimeout(function () {
//     document.querySelector(".profilePic").style.transform =
//       "rotate(" + i + "deg)";
//   }, 1000);
//   i++;
// }
