function prodClick(obj) {
    let user = localStorage.getItem("currUser");

    localStorage.setItem("currItem", obj.id);
    

    window.location.href = "productpage.html";
}

function logOut() {
    localStorage.removeItem("alwaysLoggedIn");
    localStorage.removeItem("currUser");
    window.location.href = "login.html";
}

function setUser() {
    let user = localStorage.getItem("currUser");
    document.getElementById("userName").innerHTML = user;
}



function scrollFunction(obj) {
    let mybutton = document.getElementById("myBtn");

  if (document.getElementsByClassName("products")[0].scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
    document.getElementsByClassName("products")[0].scrollTop = 0;
  }
