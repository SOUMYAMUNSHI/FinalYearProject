window.addEventListener("blur", function () {
  document.getElementById("warning").hidden = false;
});

$("#body").click(function () {
  document.getElementById("warning").hidden = true;
});
