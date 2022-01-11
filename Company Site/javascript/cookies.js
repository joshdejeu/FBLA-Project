function goToContact(){
  /* create cookie directing to specific location on page */
  var cookie = "goToContact";
  /* store in session */
  sessionStorage.setItem("cookie", cookie);
  /* redirect */
  location.href="../html/homepage.html"
}
