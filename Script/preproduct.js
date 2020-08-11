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
    /*document.getElementById("userName").innerHTML = user;*/
    document.getElementById("avatarimg").setAttribute("title", user);
}

function showSidebar() {
  
  let sideButton = document.getElementById("sidebarBtn");
  //sideButton.style.display = "none";
  let sideBar = document.getElementsByClassName("sidebar")[0];

  sideBar.style.display = "block";
  let closeBtn = document.getElementById("closeSidebar");
  closeBtn.style.display = "block";
}

function hideSidebar() {
  let closeBtn = document.getElementById("closeSidebar");
  closeBtn.style.display = "none";
  let sideBar = document.getElementsByClassName("sidebar")[0];

  sideBar.style.display = "none";
}


function scrollFunction(obj) {
    let mybutton = document.getElementById("myBtn");

  if (document.getElementsByClassName("products-master")[0].scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
    document.getElementsByClassName("products-master")[0].scrollTop = 0;
  }

function changeUpImg(num) {
  
}
