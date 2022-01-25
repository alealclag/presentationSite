document
  .querySelector(".sendMessageBtn")
  .addEventListener("click", function () {
    var sendCharm = new Audio("audio/formSent.mp3");
    sendCharm.play();
  });
