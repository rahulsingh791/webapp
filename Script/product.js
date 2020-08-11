let permobjid = 0;

function togglePopup(){
  let selname = localStorage.getItem("00"+permobjid+"seller");
  let seldesc = localStorage.getItem(selname);

  document.getElementById("sellername").innerHTML = selname;
  document.getElementById("sellerinfo").innerHTML = seldesc;


  document.getElementById("popup-1").classList.toggle("active");
  
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


function tellCurr() {

  setUser();

  let objid = localStorage.getItem("currItem");
  let name = localStorage.getItem("00"+objid+"name");
  let price = localStorage.getItem("00"+objid+"price");
  let desc = localStorage.getItem("00"+objid+"desc");
  let seller = localStorage.getItem("00"+objid+"seller");
  
  permobjid = objid;

  //let imgsrc = "assets/product-image/00"+objid.toString()".jpg";

  document.getElementById("product-name").innerHTML = name;
  document.getElementById("product-price").innerHTML = "₹"+price;
  document.getElementById("standard-info").innerHTML = desc;
  document.getElementById("soldby").innerHTML = "About "+seller+"";
  document.getElementById("product-img").setAttribute("src", "assets/product-image/00"+objid+".jpg");
  document.getElementById('standard-info').style.display = "block";
}

function goBack() {
  window.history.back();
}



function saveToCart() {
  let count = 0;
  let user = localStorage.getItem("currUser");
  if(localStorage.getItem("userCartCount"+user)==null){
    localStorage.setItem("userCartCount"+user, 0);
    count = 1;
  }else{
    count = localStorage.getItem("userCartCount"+user);
    count++;
    localStorage.setItem("userCartCount"+user, count);
  }

  localStorage.setItem(user+"Item"+count, permobjid);
  
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

function openInfo(evt, tabselect) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabselect).style.display = "block";
  evt.currentTarget.className += " active";
}

function changeUpImg(num) {
  document.getElementById("product-img").setAttribute("src", "assets/product-image/00"+num+".jpg");
}

function scrollFunction(obj) {
  let mybutton = document.getElementById("myBtn");

if (document.getElementsByClassName("details-master")[0].scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

function topFunction() {
  document.documentElement.scrollTop = 0;
  document.getElementsByClassName("details-master")[0].scrollTop = 0;
}
