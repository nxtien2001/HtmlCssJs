var user = "john";
var pass = "1234";

var inputName = document.getElementById("username");
var inputPass = document.getElementById("password");
var formLogin = document.getElementById("form-login");
if (formLogin.attachEvent) {
  formLogin.attachEvent("submit", onFormSubmit);
} else {
  formLogin.addEventListener("submit", onFormSubmit);
}
function onFormSubmit(e) {
  if (e.preventDefault) e.preventDefault();
  var username = inputName.value;
  var password = inputPass.value;
  if (username == user && password == pass) {
    window.location = "http://localhost/tiennx_geekgen1/week_1/dashboard.html";
  } else {
    alert("Tài khoản hoặc mật khẩu không chính xác");
  }
  return false;
}
