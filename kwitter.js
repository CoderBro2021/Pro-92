function send() {
    user_name = document.getElementById("user-name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter2.html"
}