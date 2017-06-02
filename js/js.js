window.onload = function () {
  document.getElementById("body").className = ""
  document.getElementById("preloader").className = "preloader-none"
}
function wrapperClick() {
  var wrapper = document.getElementById("wrapper");
  if (checked == false) {
    wrapper.className += " checked";
    checked = true
  } else {
    wrapper.className = "wrapper";
     checked = false
  }
}
