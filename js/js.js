var checked = false;

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
